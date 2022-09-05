import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/My-Profile.module.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);
  const dragons = useSelector((state) => state.dragons);
  const dragonsReserved = dragons.filter((dragon) => dragon.reserved === true);
  const missionProfile = useSelector((state) => [
    {
      MissionTitle: 'My Missions',
      data: state.missions.filter((mission) => mission.reserved),
    },
  ]);

  return (
    <div className={styles.myprofileContainer}>
      <div className={styles.rocketDiv}>
        <h2>My Rockets</h2>
        {reserveRocket.length ? (
          <div>
            {reserveRocket.map((rocket) => (
              /* eslint-disable-next-line */
              <p className={styles.rocketDesc} key={rocket.id}>
                {rocket.name}
              </p>
            ))}
          </div>
        ) : <p className={styles.rocketDesc}>No Rockets</p>}
      </div>
      <div className={styles.dragonDiv}>
        <h2>My Dragons</h2>
        {dragonsReserved.length ? (
          <div>
            {dragonsReserved.map((dragon) => (
              /* eslint-disable-next-line */
              <p key={dragon.id} className={styles.dragonDesc}>
                {dragon.name}
              </p>
            ))}
          </div>
        ) : <p className={styles.dragonDesc}>No Dragons</p>}
      </div>
      <div className={styles.missionsDiv}>
        {missionProfile.map(({ MissionTitle, data, id }) => (
          /* eslint-disable-next-line */
          <div key={id}>
            <h2>{MissionTitle}</h2>
            <div className="content">
              {
                !data.length
                  ? <p className={styles.missionDesc}>No Missions</p>
                  : data.map((item) => (
                    <p
                    /* eslint-disable-next-line */
                      key={item.id}
                      className={styles.missionDesc}
                    >
                      {item.name}
                    </p>
                  ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
