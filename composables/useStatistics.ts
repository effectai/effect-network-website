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
      staleTime: STATISTICS_STALE_TIME,
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
      return data.rows.reduce((acc: any, row: any) => {
        return acc + row.balance[0].value * 0.0001;
      }, 0);
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

  const useSupplyStatistics = () => {
    const foundationBalance = 100_000_000; // 100M

    const fetchBscSupply = async (): Promise<number> => {
      const provider = "https://bsc-dataseed.binance.org/";
      const efxAddress = "0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0";

      const json = {
        jsonrpc: "2.0",
        method: "eth_call",
        params: [
          {
            to: efxAddress,
            data: "0x18160ddd", // Function signature of totalSupply()
          },
          "latest",
        ],
        id: 1,
      };

      const response = await fetch(provider, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });

      const result = await response.json();
      const balance = parseInt(result.result, 16); // Convert hex string to integer

      return parseInt((balance / 10 ** 18).toFixed(0));
    };

    const bscSupplyQuery = useQuery({
      queryKey: ["bsc-supply"],
      queryFn: fetchBscSupply,
      staleTime: STATISTICS_STALE_TIME,
    });

    const bscSupply = computed(() => {
      return bscSupplyQuery.data?.value;
    });

    const fetchLiquidityBalance = async () => {
      const result = await fetch(`${RPC_URL}/v1/chain/get_currency_balance`, {
        method: "POST",
        body: JSON.stringify({
          code: "effecttokens",
          account: "bsc.efx",
          symbol: "EFX",
        }),
      });

      return result.json().then((data) => {
        return parseInt(data[0].replace(" EFX", ""));
      });
    };

    const liquidityBalanceQuery = useQuery({
      queryKey: ["liquidity-balance"],
      queryFn: fetchLiquidityBalance,
      staleTime: STATISTICS_STALE_TIME,
    });

    const liquidityBalance = computed(() => {
      return liquidityBalanceQuery.data?.value;
    });

    const fetchStakeBalance = async () => {
      const result = await fetch(`${RPC_URL}/v1/chain/get_currency_balance`, {
        method: "POST",
        body: JSON.stringify({
          code: "effecttokens",
          account: "efxstakepool",
          symbol: "EFX",
        }),
      });

      return result.json().then((data) => {
        return parseInt(data[0].replace(" EFX", ""));
      });
    };

    const stakeBalanceQuery = useQuery({
      queryKey: ["stake-balance"],
      queryFn: fetchStakeBalance,
      staleTime: STATISTICS_STALE_TIME,
    });

    const stakeBalance = computed(() => {
      return stakeBalanceQuery.data?.value;
    });

    const fetchDaoBalance = async () => {
      const result = await fetch(`${RPC_URL}/v1/chain/get_currency_balance`, {
        method: "POST",
        body: JSON.stringify({
          code: "effecttokens",
          account: "treasury.efx",
          symbol: "EFX",
        }),
      });

      return result.json().then((data) => {
        return parseInt(data[0].replace(" EFX", ""));
      });
    };

    const daoBalanceQuery = useQuery({
      queryKey: ["dao-balance"],
      queryFn: fetchDaoBalance,
      staleTime: STATISTICS_STALE_TIME,
    });

    const daoBalance = computed(() => {
      return daoBalanceQuery.data?.value;
    });

    const fetchEosSupply = async (): Promise<number> => {
      const result = await fetch(
        "https://www.api.bloks.io/tokens/EFX-eos-effecttokens"
      );

      return result.json().then((data) => {
        return data[0].supply.circulating;
      });
    };

    const eosSupplyQuery = useQuery({
      queryKey: ["eos-supply"],
      queryFn: fetchEosSupply,
      staleTime: STATISTICS_STALE_TIME,
    });

    const circulatingEosSupply = computed(() => {
      return eosSupplyQuery.data?.value;
    });

    const lockedEosSupply = computed(() => {
      const daoBalanceValue = daoBalance.value ?? 0;
      const stakeBalanceValue = stakeBalance.value ?? 0;
      const liquidityBalanceValue = liquidityBalance.value ?? 0;

      return daoBalanceValue + stakeBalanceValue + liquidityBalanceValue;
    });

    const liquidEosSupply = computed(() => {
      const circulatingEosSupplyValue = circulatingEosSupply.value ?? 0;
      const daoBalanceValue = daoBalance.value ?? 0;
      const stakeBalanceValue = stakeBalance.value ?? 0;
      const liquidityBalanceValue = liquidityBalance.value ?? 0;
      const bscSupplyValue = bscSupply.value ?? 0;

      return (
        circulatingEosSupplyValue -
        daoBalanceValue -
        stakeBalanceValue -
        liquidityBalanceValue -
        foundationBalance -
        bscSupplyValue
      );
    });

    return {
      bscSupply,
      lockedEosSupply,
      liquidityBalance,
      liquidEosSupply,
      circulatingEosSupply,
      daoBalance,
      stakeBalance,
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
      return feePoolConfigData?.value;
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
    useSupplyStatistics,

    useEfxPrice,
  };
};
