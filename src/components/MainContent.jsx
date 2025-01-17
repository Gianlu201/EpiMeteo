import { Container, Form } from 'react-bootstrap';
import '/public/assets/css/mainContent.css';
import { useState } from 'react';
import RacommentedCities from './RacommentedCities';
import SearchedCity from './SearchedCity';

const MainContent = () => {
  const [searchedCity, setSearchedCity] = useState('');
  const [searchedNation, setSearchedNation] = useState('IT');
  const [srcCity, setSrcCity] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (searchedCity.trim() !== '') {
      setSrcCity([searchedCity, searchedNation]);
      setSearchedCity('');
      setSearchedNation('IT');
    }
  };

  return (
    <Container id='mainSection' as={'section'} style={{ minHeight: '90vh' }}>
      <div className='pt-2'>
        <Form
          className='d-flex justify-content-center w-75 mx-auto gap-1'
          onSubmit={(e) => formSubmit(e)}
        >
          <Form.Group className='w-75 mb-3'>
            <Form.Control
              className='w-100'
              type='text'
              placeholder='Cerca la tua città..'
              value={searchedCity}
              onChange={(e) => setSearchedCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              aria-label='nation'
              value={searchedNation}
              onChange={(e) => {
                setSearchedNation(e.target.value);
              }}
            >
              <option>IT</option>
              <option>GB</option>
              <option>FR</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>

      <div id='results' className='p-4 pb-1'>
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
