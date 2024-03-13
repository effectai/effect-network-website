import { useQuery } from "@tanstack/vue-query";

const STATISTICS_STALE_TIME = 600_000; // 10 minutes
const RPC_URL = "https://eos.greymass.com";

export const useStatistics = () => {
  const contracts = {
    force: "force.efx",
    efx: "efx.token",
    feePool: "feepool.efx",
    daoProposals: "daoproposals",
  };

  const useEfxPrice = () => {
    const fetchEfxPrice = async () => {
      //TODO:: coingecko returns wrong price for efx
      const result = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=effect-network&vs_currencies=usd"
      );

      return result.json().then((data) => data["effect-network"].usd);
    };

    const query = useQuery({
      queryKey: ["efx-price"],
      queryFn: fetchEfxPrice,
      staleTime: 60000,
    });

    return query;
  };

  const fetchProposalConfig = async () => {
    const result = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: contracts.daoProposals,
        scope: contracts.daoProposals,
        table: "config",
      }),
    });

    return result.json().then((data) => {
      return data.rows[0];
    });
  };

  const fetchProposals = async () => {
    const result = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: contracts.daoProposals,
        scope: contracts.daoProposals,
        table: "proposal",
        limit: 1,
        reverse: true,
      }),
    });

    return result.json().then((data) => {
      return data.rows;
    });
  };

  const fetchFeePoolBalance = async (currentCycle: number) => {
    const result = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: contracts.feePool,
        scope: contracts.feePool,
        table: "balance",
        lowerBound: 5,
        upperBound: currentCycle,
      }),
    });

    return result.json().then((data) => {
      return data.rows.reduce(
        (acc: any, row: any) => {
          return {
            balance: acc.balance + row.balance[0].value,
          };
        },
        { balance: 0 }
      );
    });
  };

  const useForceStatistics = () => {
    const fetchForceStatistics = async () => {
      const result = await fetch(`${RPC_URL}/v1/chain/get_table_rows`, {
        method: "POST",
        body: JSON.stringify({
          json: true,
          code: contracts.force,
          scope: contracts.force,
          table: "submission",
          limit: 1,
          reverse: true,
        }),
      });

      return result.json().then((data) => {
        return data.rows[0];
      });
    };

    const forceSubmissionQuery = useQuery({
      queryKey: ["force-statistics"],
      queryFn: fetchForceStatistics,
      staleTime: STATISTICS_STALE_TIME,
    });

    const tasksCompleted = computed(() => {
      return forceSubmissionQuery.data?.value?.id;
    });

    return {
      tasksCompleted,
    };
  };

  const useDaoStatistics = () => {
    const proposalConfigQuery = useQuery({
      queryKey: ["proposal-config"],
      queryFn: fetchProposalConfig,
    });

    const { data: proposalConfigData } = proposalConfigQuery;

    const currentCycle = computed(
      () => proposalConfigData?.value?.current_cycle
    );

    const proposalsQuery = useQuery({
      queryKey: ["proposals"],
      queryFn: () => {
        return fetchProposals();
      },
      staleTime: STATISTICS_STALE_TIME,
    });

    const { data: proposalsData } = proposalsQuery;
    const proposalsCreated = computed(() => proposalsData?.value?.[0]?.id);

    const feePoolConfigQuery = useQuery({
      queryKey: ["fee-pool"],
      queryFn: () => {
        return fetchFeePoolBalance(currentCycle.value);
      },
      enabled: computed(() => !!currentCycle.value),
      staleTime: STATISTICS_STALE_TIME,
    });

    const { data: feePoolConfigData } = feePoolConfigQuery;

    const feePoolBalance = computed(() => {
      return feePoolConfigData?.value?.balance;
    });

    return {
      proposalsCreated,
      currentCycle,
      feePoolBalance,
    };
  };

  return {
    useDaoStatistics,
    useForceStatistics,
    useEfxPrice,
  };
};
