import Categories from 'components/categoriescom/Categories';
import { useState, useCallback } from 'react';
import 'components/Pages/map.css';
import TourList from 'pages/TourList';
import Button from 'components/common/Button';

const MapPage = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <div>
        <Categories category={category} onSelect={onSelect} />
        <TourList category={category} />
      </div>
    </>
  );
};
export default MapPage;
