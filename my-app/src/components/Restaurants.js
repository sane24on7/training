import { useMemo, useState } from 'react';

import Menu from './Menu';
import Tabs from './Tabs';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);
  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );
  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
