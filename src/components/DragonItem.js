/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, cancelDragon } from '../redux/dragons/dragons';
import styles from './styles/DragonItem.module.css';

const DragonItem = (props) => {
  const { dragon } = props;
  const dispatch = useDispatch();

  const reserveClick = (id) => {
    dispatch(reserveDragon(id));
  };

  const cancelClick = (id) => {
    dispatch(cancelDragon(id));
  };

  return (
    <div className={styles.dragonItem}>
      <div className={styles.dragonImg}>
        <img src={dragon.flickr_images} alt="capsule dragon1" className={styles.imgFlickr} />
      </div>
      <div className={styles.dragonInfo}>
        <h2>{dragon.name}</h2>
        <p className={styles.dragonType}>
          {dragon.reserved ? (<span className={styles.badge}>Reserved</span>) : ''}
          <span>
            Type:
            {dragon.type}
          </span>
        </p>
        <div>
          {dragon.reserved
            ? (
              <button
                type="button"
                id={dragon.id}
                onClick={(e) => cancelClick(e.target.id)}
                className={styles.cancelBtn}
              >
                Cancel Reservation
              </button>
            )
            : (
              <button
                type="button"
                id={dragon.id}
                onClick={(e) => reserveClick(e.target.id)}
                className={styles.reserveBtn}
              >
                Reserve Dragon
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

DragonItem.propTypes = { dragon: PropTypes.object.isRequired };

export default DragonItem;
