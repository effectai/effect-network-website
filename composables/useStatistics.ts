import { useQuery, type QueryFunction } from "@tanstack/vue-query";
import { experimental_createPersister } from "@tanstack/query-persist-client-core";

import {
  fetchProposalConfig,
  fetchDaoProposals,
  fetchEfxPrice,
  fetchForceStatistics,
  fetchBscSupply,
  fetchLiquidityBalance,
  fetchStakeBalance,
  fetchDaoBalance,
  fetchEosSupply,
  fetchFeePoolBalance,
} from "~/services/apiService";

export const usePersister = () => {
  const persister = experimental_createPersister({
    storage: window?.localStorage ? localStorage : undefined,
  });

  return persister;
};

export const useStatistics = () => {
  const config = useRuntimeConfig();
  const STATISTICS_STALE_TIME = parseInt(config.public.statisticsStaleTime);

  const useStatisticQuery = (
    queryKey: string[],
    queryFn: QueryFunction,
    pick?: string
  ) => {
    const query = useQuery({
      queryKey,
      queryFn,
      staleTime: STATISTICS_STALE_TIME,
      persister: usePersister() as any,
    });

    const value = computed(() => {
      if (pick && query.data?.value) {
        return query.data?.value?.[pick];
      } else {
        return query.data?.value;
      }
    }) as Ref<number>;

    return {
      isLoading: query.isLoading,
      value,
    };
  };

  const useEfxPrice = () => {
    const query = useQuery({
      queryKey: ["efx-price"],
      queryFn: fetchEfxPrice,
      staleTime: STATISTICS_STALE_TIME,
      persister: usePersister() as any,
    });

    return query;
  };

  const useForceStatistics = () => {
    const forceSubmissionQuery = useQuery({
      queryKey: ["force-statistics"],
      queryFn: fetchForceStatistics,
      staleTime: STATISTICS_STALE_TIME,
      persister: usePersister() as any,
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

    const { value: bscSupply } = useStatisticQuery(
      ["bsc-supply"],
      fetchBscSupply
    );

    const { value: liquidityBalance } = useStatisticQuery(
      ["liquidity-balance"],
      fetchLiquidityBalance
    );

    const { value: stakeBalance } = useStatisticQuery(
      ["stake-balance"],
      fetchStakeBalance
    );

    const { value: daoBalance } = useStatisticQuery(
      ["dao-balance"],
      fetchDaoBalance
    );

    const { value: circulatingEosSupply } = useStatisticQuery(
      ["eos-supply"],
      fetchEosSupply
    );

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
    const { value: currentCycle } = useStatisticQuery(
      ["proposal-config"],
      fetchProposalConfig,
      "current_cycle"
    );

    const proposalsQuery = useQuery({
      queryKey: ["proposals"],
      queryFn: () => {
        return fetchDaoProposals();
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
