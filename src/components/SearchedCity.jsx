import { useEffect, useState } from 'react';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import { ArrowDown, Eye, Moisture, Wind } from 'react-bootstrap-icons';
import DaysWeather from './DaysWeather';

const SearchedCity = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [myCity, setMyCity] = useState({});
  const [daysWeather, setDaysWeather] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date();

  const getMyCity = async (city, nation) => {
    setIsLoaded(false);
    setMyCity({});
    setDaysWeather({});
    setIsError(false);
    setErrorMsg('');

    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${nation}&appid=5fb43d9317a963bf83907952a8a8a3f3&units=metric&lang=it`;
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMyCity(data);
        getDaysWeather(props.city, props.nation);
      } else {
        setErrorMsg('not found');
        throw new Error('not found');
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const getDaysWeather = async (city, nation) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${nation}&appid=5fb43d9317a963bf83907952a8a8a3f3&units=metric&lang=it`;
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data.list);
        setDaysWeather(data);
        setIsLoaded(true);
      } else {
        setErrorMsg('not found');
        throw new Error('not found');
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getMyCity(props.city, props.nation);
  }, [props.city]);

  return (
    <div>
      {isLoaded ? (
        <>
          <Row>
            <Col md={3} className='border-end border-2 border-white px-4'>
              <img
                src={`https://openweathermap.org/img/wn/${myCity.weather[0].icon}@2x.png`}
              />
              <span
                className='lead fw-normal'
                style={{ textTransform: 'capitalize' }}
              >
                {myCity.weather[0].description}
              </span>

              <h2>{myCity.name}</h2>
              <span>Previsione:</span>
              <p>{`${today.getDate()}/${
                today.getMonth() + 1
              }/${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`}</p>
            </Col>

            <Col md={3} className='border-end border-2 border-white px-4'>
              <Row>
                <Col sm={9}>
                  <span className='d-block display-1 fw-semibold mb-3'>
                    {Math.round(myCity.main.temp)}°
                  </span>
                  <span>
                    Percepiti: <b>{Math.round(myCity.main.feels_like)}°</b>
                  </span>
                </Col>
                <Col sm={3} className='fs-2'>
                  <span className='d-block border-bottom border-2 border-white text-center'>
                    {Math.round(myCity.main.temp_max)}°
                  </span>
                  <span className='d-block text-center'>
                    {Math.round(myCity.main.temp_min)}°
                  </span>
                </Col>
              </Row>
            </Col>

            <Col md={3} className='border-end border-2 border-white px-4'>
              <p>
                <Moisture className='me-1' /> Umidità: {myCity.main.humidity}%
              </p>
              <p>
                <ArrowDown className='me-1' /> Pressione: {myCity.main.pressure}{' '}
                hPa
              </p>
              <p>
                <Wind className='me-1' /> Vento: {myCity.wind.speed} Km/h da{' '}
                {myCity.wind.deg}°
              </p>
              <p>
                <Eye className='me-1' /> Visibilità: {myCity.visibility / 1000}{' '}
                km
              </p>
            </Col>
          </Row>

          <Row className='mt-5'>
            <DaysWeather weatherPrev={daysWeather.list} />
          </Row>
        </>
      ) : !isError ? (
        <div
          className='d-flex justify-content-center pt-5'
          style={{ height: '80vh' }}
        >
          <Spinner animation='border' variant='info' />
        </div>
      ) : (
        <Alert variant='danger'>
          {errorMsg === 'not found'
            ? 'Nessuna città trovata, riprova'
            : 'ERROR, torna alla home e riprova'}
        </Alert>
      )}
    </div>
  );
};

export default SearchedCity;
