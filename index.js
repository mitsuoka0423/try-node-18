const main = async () => {
  // https://open-meteo.com/en
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo');
  const body = await response.text();
  console.log(body);
}

main();