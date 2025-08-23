const coingecko = {
  baseUrl: 'https://api.coingecko.com/api/v3/coins',
  options: {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': process.env.COINGECKO_KEY,
    },
  },
};

function filterResultsByCurrency(results, currency) {
  let filteredResults;

  if (currency === 'usdt') {
    filteredResults = results.filter(
      (result) => result.symbol.split('_')[1] === 'USDT'
    );
  } else {
    filteredResults = results.filter(
      (result) => result.symbol.split('_')[1] === 'IRT'
    );
  }

  return filteredResults;
}

function getResultsSymbols(results) {
  const symbols = results.map((result) => {
    const symbol = result.symbol.split('_')[0];
    const lowerSymbol = symbol.toLowerCase();
    return lowerSymbol;
  });
  return symbols;
}

async function getCoinsMoreInfo(results) {
  const resultSymbols = getResultsSymbols(results);

  try {
    const response = await fetch(
      `${coingecko.baseUrl}/markets?vs_currency=usd`,
      coingecko.options
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    const coins = data
      .filter((coin) => resultSymbols.includes(coin.symbol))
      .map((coin) => ({ symbol: coin.symbol, image: coin.image, id: coin.id }));

    const notFoundCoinSymbols = resultSymbols.filter(
      (symbol) => !coins.find((coin) => coin.symbol === symbol)
    );

    let foundCoins;

    if (notFoundCoinSymbols.length > 0) {
      const response = await fetch(
        `${coingecko.baseUrl}/list`,
        coingecko.options
      );
      const allCoinsList = await response.json();
      const foundCoinsIds = notFoundCoinSymbols.map(
        (symbol) => allCoinsList.find((coin) => coin.symbol === symbol)?.id
      );

      foundCoins = await Promise.all(
        foundCoinsIds.map(async (coinId) => {
          const response = await fetch(
            `${coingecko.baseUrl}/${coinId}`,
            coingecko.options
          );

          const coinData = await response.json();
          const formattedCoin = {
            symbol: coinData.symbol,
            image: coinData.image.small,
            id: coinData.id,
          };

          return formattedCoin;
        })
      );
    }

    return [...coins, ...(foundCoins ?? [])];
  } catch (error) {
    console.error(error);
  }
}

export default async function getCoinsData(limit, currency) {
  try {
    let response = await fetch('https://api.bitpin.org/api/v1/mkt/tickers/');

    const data = await response.json();

    if (!response.ok) {
      console.log('🚀 ~ coins.js:102 ~ getCoinsData ~ data:', data);

      throw new Error(data.error);
    }
    const fixedLimit = currency === 'usdt' ? limit * 2 + 1 : limit * 2 - 1;
    const limitedResults = data.slice(0, fixedLimit);

    const resultsfilteredByCurrency = filterResultsByCurrency(
      limitedResults,
      currency
    );

    const coins = await getCoinsMoreInfo(resultsfilteredByCurrency);

    const resultsWithImages = resultsfilteredByCurrency.map((result) => {
      const resultSymbol = result.symbol.split('_')[0].toLowerCase();
      const { image, id } = coins.find((coin) => coin.symbol === resultSymbol);

      return { ...result, image, id };
    });

    return { data: resultsWithImages, error: null };
  } catch (error) {
    console.error(error);
    return {
      error: {
        title: 'اطلاعات رمز ارز ها دریافت نشد',
        description: 'لطفا اینترنت خود را بررسی کنید و دوباره تلاش کنید.',
      },
      data: null,
    };
  }
}

export async function getCoinDetails(id, days) {
  try {
    const response = await fetch(
      `${coingecko.baseUrl}/${id}/market_chart?vs_currency=usd&days=${days}`,
      {
        ...coingecko.options,
        next: {
          revalidate: 60,
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || `Faild to fetch the coin details for ${id}`
      );
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
