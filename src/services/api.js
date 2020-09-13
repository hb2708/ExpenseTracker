export const fetchExchangeRate = async () => {
  try {
    const response = await fetch(
      'https://transfer.moneymatch.co/utility/rate/MYR/INR',
    );
    const data = await response.json();
    console.info('received data');
    return data;
  } catch (e) {
    console.log(e);
  }
};
