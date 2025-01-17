const SingleRacommentedCity = (props) => {
  const giveCityInfos = () => {
    props.setSrcCity([props.city, props.nation]);
  };

  return (
    <div
      className='d-inline-block px-5 border border-1 border-light rounded-4 mb-3 py-3'
      onClick={giveCityInfos}
      style={{ width: '20%', cursor: 'pointer' }}
    >
      <div className='text-center'>
        <img
          src={`https://flagcdn.com/16x12/${props.nation.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/32x24/${props.nation.toLowerCase()}.png 2x, https://flagcdn.com/48x36/${props.nation.toLowerCase()}.png 3x`}
          width='24'
          height='18'
          alt='Brasile'
        />
      </div>
      <div className='text-center'>
        <span className='h4 me-2'>{props.city}</span>
        <span>{props.nation}</span>
      </div>
    </div>
  );
};

export default SingleRacommentedCity;
