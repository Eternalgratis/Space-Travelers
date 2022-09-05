// to add action types
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKETS = 'RESERVE_ROCKETS';
const CANCEL_ROCKETS = 'CANCEL_ROCKETS';

// to add action creators
const fetchRocket = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const reserveRocket = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

const cancelRocket = (id) => ({
  type: CANCEL_ROCKETS,
  id,
});

// To fetch information
const fetchRockets = async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  dispatch(fetchRocket(rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};

// to initialize state
const initialState = [];
let newState;

// to add reducers
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      newState = state.map((rock) => {
        if (rock.id !== action.id) {
          return rock;
        }
        return { ...rock, reserved: true };
      });
      return newState;
    case CANCEL_ROCKETS:
      newState = state.map((rock) => {
        if (rock.id !== action.id) return rock;
        return { ...rock, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};

export { fetchRockets, reserveRocket, cancelRocket };
export default rocketReducer;
