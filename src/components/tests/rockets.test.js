import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../rockets/rockets';
import store from '../../redux/configureStore';
import rocketReducer, { fetchRockets } from '../../redux/rockets/rockets';

describe('Jest Snapshot testing suite', () => {
  it('matches DOM rockets snapshot', () => {
    const rocketDiv = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      );
    expect(rocketDiv).toMatchSnapshot();
  });

  it('testing for the newState to return empty array', () => {
    const newState = rocketReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('the initialState should return empty array', () => {
    const initialState = rocketReducer([], {});
    expect(initialState).toEqual([]);
  });

  it('the rocketItem should equal values', () => {
    const rocketItems = fetchRockets();
    expect(rocketItems).not.toEqual([]);
  });
});
