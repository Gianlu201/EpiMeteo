import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ArrowDown, Eye, Moisture, Wind } from 'react-bootstrap-icons';

const SearchedCity = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [myCity, setMyCity] = useState({});

  const today = new Date();

  const getMyCity = async (city, nation) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${nation}&appid=5fb43d9317a963bf83907952a8a8a3f3&units=metric&lang=it`;
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMyCity(data);
        console.log(today);
        setIsLoaded(true);
      } else {
        throw new Error('Error API');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyCity(props.city, props.nation);
  }, []);

  return (
    <div>
      {isLoaded && (
        <>
          <Row>
            <Col md={3} className='border-end border-2 border-white'>
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
            <Col md={3} className='border-end border-2 border-white'>
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
            <Col md={3} className='border-end border-2 border-white'>
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
          <Row></Row>
        </>
      )}
    </div>
  );
};

export default SearchedCity;
