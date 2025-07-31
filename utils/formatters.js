import { digitsEnToFa } from '@persian-tools/persian-tools';
const addGrouping = Intl.NumberFormat(['ir'], {
  useGrouping: true,
}).format;

async function formatPrice(price) {
  const grouped = addGrouping(price);

  const persianNumber = digitsEnToFa(grouped);
  return persianNumber;
}

function formatChangePercentage(priceChange) {
  const newNumber =
    priceChange > 0
      ? '+' + digitsEnToFa(priceChange)
      : digitsEnToFa(priceChange);
  const changeColor = priceChange > 0 ? 'text-green-600' : 'text-red-600';

  return {
    changePercentage: newNumber + ' %',
    changeColor,
  };
}

export { formatPrice, formatChangePercentage };
