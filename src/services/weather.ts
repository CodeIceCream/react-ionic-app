interface Forecast {
  adcode: string;//"440307"
  casts: Cast[];
  city: string;//"龙岗区"
  province: string;//"广东"
  reporttime: string; // "2023-04-16 00:00:46"
}

type Cast = {
  date: string; //"2023-04-15"
  daypower: string; //"≤3"
  daytemp: string; //"30"
  daytemp_float: string; // "30.0"
  dayweather: string; //"多云"
  daywind: string; //"东北"
  nightpower: string; // "≤3"
  nighttemp: string; // "22"
  nighttemp_float: string; //"22.0"
  nightweather: string; //"多云"
  nightwind: string; //"东北"
  week: string; // "6"
}

const parameters = {
  key: '4710354cd3da06d65f6003903000e5b8', // 开发者Key
  city: '440300',  // adcode 北京：110101
  extensions: 'all', // base:返回实况天气 all:返回预报天气
  output: 'json', // json|xml
}

export function weatherSerivces(): Promise<Forecast[]> {
  return new Promise((resolve, reject) => {
    fetch(`https://restapi.amap.com/v3/weather/weatherInfo?city=${parameters.city}&extensions=${parameters.extensions}&key=${parameters.key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resolve(data.forecasts)
      })
      .catch(e => {
        console.error('fetch weatherInfo fail', JSON.stringify(e));
        reject(e)
      });
  })
}

