const URL = 'https://api.spacexdata.com/v3/missions';
const LOADMISSION = 'missions/load';
const JOINMISSION = 'missions/join';
const LEAVEMISSION = 'missions/leave';

export const loadMission = (payload) => ({
  type: LOADMISSION,
  payload,
});

export const joinMission = (id) => ({
  type: JOINMISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVEMISSION,
  id,
});

// Actions
export const fetchMission = async (dispatch) => {
  const response = await fetch(URL);
  const missions = await response.json();

  dispatch(
    loadMission(
      missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      })),
    ),
  );
};

// Reducer
const missionReducer = (state = [], action) => {
  switch (action.type) {
    case LOADMISSION:
      return action.payload;
    case JOINMISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }

        return {
          ...mission,
          reserved: true,
        };
      });

    case LEAVEMISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }

        return {
          ...mission,
          reserved: false,
        };
      });

    default:
      return state;
  }
};

export default missionReducer;
