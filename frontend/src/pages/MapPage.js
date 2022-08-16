import Categories from 'components/categoriescom/Categories';
import { useState, useCallback } from 'react';
import 'components/Pages/map.css';
import TourList from 'pages/TourList';
import Mapmodalper from 'components/common/mapmodalper';
import Button from 'components/common/Button';
const MapPage = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <div>
        <Categories category={category} onSelect={onSelect} />
        <Mapmodalper />
        <TourList category={category} />
      </div>
    </>
  );
};
export default MapPage;
