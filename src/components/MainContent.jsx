import { Container, Form } from 'react-bootstrap';
import '/public/assets/css/mainContent.css';
import { useState } from 'react';
import RacommentedCities from './RacommentedCities';
import SearchedCity from './SearchedCity';

const MainContent = () => {
  const [searchedCity, setSearchedCity] = useState('');
  const [srcCity, setSrcCity] = useState([]);

  return (
    <Container id='mainSection' as={'section'}>
      <div className='pt-2'>
        <Form className='w-50 mx-auto'>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Cerca la tua città..'
              value={searchedCity}
              onChange={(e) => setSearchedCity(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>

      <div id='results' className='p-4'>
        {srcCity.length === 0 ? (
          <RacommentedCities setSrcCity={setSrcCity} />
        ) : (
          <SearchedCity city={srcCity[0]} nation={srcCity[1]} />
        )}
      </div>
    </Container>
  );
};

export default MainContent;
