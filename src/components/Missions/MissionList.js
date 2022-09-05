import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { fetchMission, joinMission, leaveMission } from '../../redux/missions/Mission';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMission);
    }
  }, []);
  const joinMissionHandler = (id) => dispatch(joinMission(id));
  const leaveMissionHandler = (id) => dispatch(leaveMission(id));
  return (
    <Container className="container-fluid">
      <Table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            /* eslint-disable-next-line */
            <tr className="row-wrap" key={id}>
              <td>
                <h3>{name}</h3>
              </td>
              <td>
                <p>{description}</p>
              </td>
              <td>
                {reserved && (
                <span className="btn" type="button">
                  Active Member
                </span>
                )}
                {!reserved && (
                <span className="btn" type="button">
                  Not a Member
                </span>
                )}
              </td>
              <td>
                {!reserved && (
                <Button
                  className="leave-btn"
                  size="sm"
                  variant="outline-danger"
                  type="button"
                  onClick={() => joinMissionHandler(id)}
                >
                  Join Mission
                </Button>
                )}
                {reserved && (
                <Button
                  className="join-btn"
                  size="sm"
                  variant="outline-secondary"
                  type="button"
                  onClick={() => leaveMissionHandler(id)}
                >
                  Leave Mission
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionList;
