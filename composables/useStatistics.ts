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

  const useStatisticQuery = ({
    queryKey,
    queryFn,
    pick,
    enabled,
  }: {
    queryKey: string[];
    queryFn: QueryFunction;
    enabled?: Ref<boolean> | undefined;
    pick?: Function;
  }) => {
    const query = useQuery({
      queryKey,
      queryFn,
      enabled,
      staleTime: STATISTICS_STALE_TIME,
      persister: usePersister(),
    });

    const value = computed(() => {
      if (pick) {
        return pick(query.data.value);
      } else {
        return query.data.value;
      }
    });

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
      persister: usePersister(),
    });

    return query;
  };

  const useForceStatistics = () => {
    const forceSubmissionQuery = useQuery({
      queryKey: ["force-statistics"],
      queryFn: fetchForceStatistics,
      staleTime: STATISTICS_STALE_TIME,
      persister: usePersister(),
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

    const { value: bscSupply } = useStatisticQuery({
      queryKey: ["bsc-supply"],
      queryFn: fetchBscSupply,
    });

    const { value: liquidityBalance } = useStatisticQuery({
      queryKey: ["liquidity-balance"],
      queryFn: fetchLiquidityBalance,
    });

    const { value: stakeBalance } = useStatisticQuery({
      queryKey: ["stake-balance"],
      queryFn: fetchStakeBalance,
    });

    const { value: daoBalance } = useStatisticQuery({
      queryKey: ["dao-balance"],
      queryFn: fetchDaoBalance,
    });

    const { value: circulatingEosSupply } = useStatisticQuery({
      queryKey: ["eos-supply"],
      queryFn: fetchEosSupply,
    });

    const lockedEosSupply = computed(() => {
      return daoBalance.value + stakeBalance.value + liquidityBalance.value;
    });

    const liquidEosSupply = computed(
      () =>
        circulatingEosSupply.value -
        daoBalance.value -
        stakeBalance.value -
        liquidityBalance.value -
        bscSupply.value -
        foundationBalance
    );

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
    const { value: currentCycle } = useStatisticQuery({
      queryFn: fetchProposalConfig,
      queryKey: ["proposal-config"],
      pick: (data: any) => {
        return data.current_cycle;
      },
    });

    const { value: proposalsCreated } = useStatisticQuery({
      queryKey: ["proposals"],
      queryFn: fetchDaoProposals,
      pick: (data: any) => {
        return data?.[0].id;
      },
    });

    const { value: feePoolBalance } = useStatisticQuery({
      queryFn: () => fetchFeePoolBalance(),
      queryKey: ["fee-pool"],
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
