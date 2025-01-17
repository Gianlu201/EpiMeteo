import { useEffect, useState } from 'react';

const DaysWeather = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({});

  const test = (myArr) => {
    let arr = myArr.map((w) => {
      return w.dt_txt.split(' ')[0].slice(5);
    });

    let arrDate = arr.map((element) => {
      return element.split('-').reverse().join('-');
    });

    let arrTime = myArr.map((w) => {
      return w.dt_txt.split(' ')[1].slice(0, 5);
    });
    console.log(arrDate);
    console.log(arrTime);

    setData({
      date: arrDate,
      hour: arrTime,
    });
    setIsLoaded(true);
  };

  useEffect(() => {
    console.log(props.weatherPrev);
    test(props.weatherPrev);
  }, []);

  return (
    <>
      {isLoaded && (
        <div className='d-flex flex-wrap gap-4 mb-5'>
          {data.hour.map((element, i) => {
            return (
              <div
                key={i}
                className='border border-1 border-light rounded-4 px-3 py-1 me-2'
              >
                <span className='d-block fw-semibold'>{data.date[i]}</span>
                <span className='d-block'>{element}</span>
                <span className='d-block text-center lead mt-1 mb-2'>
                  {Math.round(props.weatherPrev[i].main.temp)}°
                </span>
                <img
                  src={`https://openweathermap.org/img/wn/${props.weatherPrev[i].weather[0].icon}@2x.png`}
                  alt={props.weatherPrev[i].weather[0].description}
                  width={'40px'}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default DaysWeather;
