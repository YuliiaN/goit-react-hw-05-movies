import { Oval } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <Oval
      height={100}
      width={100}
      color="maroon"
      wrapperStyle={{ margin: '0 auto' }}
      visible={loading}
      ariaLabel="oval-loading"
      secondaryColor="#852626"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
