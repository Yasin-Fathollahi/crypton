export function sleep(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(), delay));
}

export function groupToAvoidRateLimit(data, rateLimit) {
  const groupedData = [];
  let counter = 0;
  data.forEach((element, index, array) => {
    if (index % rateLimit === 0) {
      groupedData.push(array.slice(counter * rateLimit, index + 1));
      counter++;
    }
  });

  return groupedData;
}
