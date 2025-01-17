const SingleRacommentedCity = (props) => {
  const giveCityInfos = () => {
    props.setSrcCity([props.city, props.nation]);
  };

  return (
    <div className='d-inline-block' onClick={giveCityInfos}>
      <div className='text-center'>
        <img
          src={`https://flagcdn.com/16x12/${props.nation.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/32x24/${props.nation.toLowerCase()}.png 2x, https://flagcdn.com/48x36/${props.nation.toLowerCase()}.png 3x`}
          width='24'
          height='18'
          alt='Brasile'
        />
      </div>
      <span className='h4 me-2'>{props.city}</span>
      <span>{props.nation}</span>
    </div>
  );
};

export default SingleRacommentedCity;
