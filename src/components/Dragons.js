import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragonItem from './DragonItem';
import { getDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragons());
    }
  }, []);

  return (
    <div className="dragonContainer">
      {dragons.map((dragon) => (
        <DragonItem dragon={dragon} key={dragon.id} />
      ))}
    </div>
  );
};

export default Dragons;
