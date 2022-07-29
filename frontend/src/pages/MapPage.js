import 'components/Pages/map.css';

import TourList from 'pages/TourList';
import Map from '../components/map/map'
const MapPage = () => {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <TourList />
        {/* <Map /> */}
      </div>
    </>
  );
};
export default MapPage;
