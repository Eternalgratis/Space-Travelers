import './rockets.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reserveRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        /* eslint-disable-next-line */
        <div className="rocketDiv" key={rocket.id}>
          <div className="imgRocket"><img src={rocket.images[0]} alt={rocket.name} /></div>
          <div className="descDiv">
            <h2 id={rocket.id}>{rocket.name}</h2>
            <p className="desc">
              {rocket.reserved ? <span><button className="badgeBtn" type="button">Reserved</button></span> : null}
              {rocket.description}
            </p>
            {(!rocket.reserved) && (<button className="reservationBtn button" type="button" id={rocket.id} onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>)}
            {(rocket.reserved) && (<button className="cancelBtn  button" type="button" id={rocket.id} onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
