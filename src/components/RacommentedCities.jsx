import SingleRacommentedCity from './SingleRacommentedCity';

const RacommentedCities = (props) => {
  return (
    <div className='d-flex justify-content-around'>
      <SingleRacommentedCity
        city='Roma'
        nation='IT'
        setSrcCity={props.setSrcCity}
      />
      <SingleRacommentedCity
        city='London'
        nation='GB'
        setSrcCity={props.setSrcCity}
      />
      <SingleRacommentedCity
        city='Milano'
        nation='IT'
        setSrcCity={props.setSrcCity}
      />
      <SingleRacommentedCity
        city='Paris'
        nation='FR'
        setSrcCity={props.setSrcCity}
      />
    </div>
  );
};

export default RacommentedCities;
