const getTemp = (cityName, cbFn) => {
  const temp = 15;
  cbFn(temp)
  return temp;
  
}


getTemp("sydney", (response) => {
  setTimeout(() => console.log(response), 2000)});

