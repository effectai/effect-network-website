class APIError extends Error {
  constructor() {
    super("API Error");
  }
}

export const safeFetch = async (url: string, options?: RequestInit) => {
  try {
    const data = await fetch(url, options);
    return data.json();
  } catch (e) {
    console.error(e);
    throw new APIError();
  }
};

export const fetchEfxPrice = async () => {
  const data = await safeFetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=effect-network&vs_currencies=usd"
  );

  return data["effect-network"].usd;
};

export const fetchProposalConfig = async () => {
  const config = useRuntimeConfig();

  const result = await safeFetch(
    `${config.public.rpcUrl}/v1/chain/get_table_rows`,
    {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: config.public.contracts.daoProposals,
        scope: config.public.contracts.daoProposals,
        table: "config",
        limit: 1,
      }),
    }
  );

  return result.rows[0];
};

export const fetchDaoProposals = async () => {
  const config = useRuntimeConfig();

  const result = await safeFetch(
    `${config.public.rpcUrl}/v1/chain/get_table_rows`,
    {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: config.public.contracts.daoProposals,
        scope: config.public.contracts.daoProposals,
        table: "proposal",
        limit: 1,
        reverse: true,
      }),
    }
  );

  return result.rows;
};

export const fetchFeePoolBalance = async () => {
  const config = useRuntimeConfig();

  const getTableRows = async (lowerBound: number) => {
    return await safeFetch(`${config.public.rpcUrl}/v1/chain/get_table_rows`, {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: config.public.contracts.feePool,
        scope: config.public.contracts.feePool,
        table: "balance",
        limit: 75,
        lower_bound: lowerBound,
      }),
    });
  };

  const results = [];

  //start at cycle 3
  let i = 3;
  while (true) {
    const result = await getTableRows(i);
    results.push(...result.rows);

    if (!result.more || !result.next_key) {
      break;
    }

    i = parseInt(result.next_key);
  }

  return results.reduce((acc: any, row: any) => {
    return acc + row.balance[0].value * 0.0001;
  }, 0);
};

export const fetchForceStatistics = async () => {
  const config = useRuntimeConfig();

  const result = await safeFetch(
    `${config.public.rpcUrl}/v1/chain/get_table_rows`,
    {
      method: "POST",
      body: JSON.stringify({
        json: true,
        code: config.public.contracts.force,
        scope: config.public.contracts.force,
        table: "submission",
        limit: 1,
        reverse: true,
      }),
    }
  );

  return result.rows[0];
};

export const fetchBscSupply = async (): Promise<number> => {
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

export const fetchLiquidityBalance = async () => {
  const config = useRuntimeConfig();

  const result = await fetch(
    `${config.public.rpcUrl}/v1/chain/get_currency_balance`,
    {
      method: "POST",
      body: JSON.stringify({
        code: "effecttokens",
        account: "bsc.efx",
        symbol: "EFX",
      }),
    }
  );

  return result.json().then((data) => {
    return parseInt(data[0].replace(" EFX", ""));
  });
};

export const fetchStakeBalance = async () => {
  const config = useRuntimeConfig();

  const result = await fetch(
    `${config.public.rpcUrl}/v1/chain/get_currency_balance`,
    {
      method: "POST",
      body: JSON.stringify({
        code: "effecttokens",
        account: "efxstakepool",
        symbol: "EFX",
      }),
    }
  );

  return result.json().then((data) => {
    return parseInt(data[0].replace(" EFX", ""));
  });
};

export const fetchDaoBalance = async () => {
  const config = useRuntimeConfig();

  const result = await fetch(
    `${config.public.rpcUrl}/v1/chain/get_currency_balance`,
    {
      method: "POST",
      body: JSON.stringify({
        code: "effecttokens",
        account: "treasury.efx",
        symbol: "EFX",
      }),
    }
  );

  return result.json().then((data) => {
    return parseInt(data[0].replace(" EFX", ""));
  });
};

export const fetchEosSupply = async (): Promise<number> => {
  const result = await fetch(
    "https://www.api.bloks.io/tokens/EFX-eos-effecttokens"
  );

  return result.json().then((data) => {
    return data[0].supply.circulating;
  });
};
