import { useQuery } from "@tanstack/vue-query";

export const useStatistics = () => {
  const status = "Active";

  const efxPrice = ref(0);

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
    const result = await fetch(
      "https://eos.greymass.com/v1/chain/get_table_rows",
      {
        method: "POST",
        body: JSON.stringify({
          json: true,
          code: "daoproposals",
          scope: "daoproposals",
          table: "config",
        }),
      }
    );

    return result.json().then((data) => {
      return data.rows[0];
    });
  };

  const fetchFeePoolBalance = async (currentCycle: number) => {
    const result = await fetch(
      "https://eos.greymass.com/v1/chain/get_table_rows",
      {
        method: "POST",
        body: JSON.stringify({
          json: true,
          code: "feepool.efx",
          scope: "feepool.efx",
          table: "balance",
          lowerBound: 5,
          upperBound: currentCycle,
        }),
      }
    );

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

  const useDaoStatistics = async () => {
    const proposalConfig = useQuery({
      queryKey: ["proposal-config"],
      queryFn: fetchProposalConfig,
    });

    const { data: proposalConfigData } = proposalConfig;

    const currentCycle = computed(
      () => proposalConfigData?.value?.current_cycle
    );

    const feePoolConfig = useQuery({
      queryKey: ["fee-pool"],
      queryFn: () => {
        return fetchFeePoolBalance(currentCycle.value);
      },
      enabled: computed(() => !!currentCycle.value),
      staleTime: 120000,
    });

    const { data: feePoolConfigData } = feePoolConfig;

    const feePoolBalance = computed(() => {
      return feePoolConfigData?.value?.balance;
    });

    return {
      currentCycle,
      feePoolBalance,
    };
  };

  return {
    useDaoStatistics,
    useEfxPrice,
  };
};
