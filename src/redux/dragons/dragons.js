const GET_DRAGONS = 'get_dragons';
const RESERVE_DRAGON = 'reserve_dragon';
const CANCEL_DRAGON = 'cancel_dragon';
const url = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS: {
      return action.payload;
    }
    case RESERVE_DRAGON: {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
    }
    case CANCEL_DRAGON: {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
    }
    default:
      return state;
  }
};

const dragonsArray = (data) => {
  const dragonsData = [];
  data.map((dragons) => (
    dragonsData.push(
      {
        id: dragons.id,
        name: dragons.name,
        type: dragons.type,
        flickr_images: dragons.flickr_images[0],
      },
    )
  ));
  return dragonsData;
};

const getDragons = () => (dispatch) => fetch(url)
  .then(async (response) => {
    const dragonsData = await response.json();
    return dragonsData;
  })
  .then((dragonsData) => {
    dispatch({ type: GET_DRAGONS, payload: dragonsArray(dragonsData) });
  });

const reserveDragon = (id) => (
  {
    type: RESERVE_DRAGON,
    payload: id,
  }
);

const cancelDragon = (id) => (
  {
    type: CANCEL_DRAGON,
    payload: id,
  }
);

export { getDragons, reserveDragon, cancelDragon };
export default dragonReducer;
