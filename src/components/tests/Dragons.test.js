import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../redux/configureStore';
import Dragons from '../Dragons';

describe('Dragons component', () => {
  it('Renders Dragons component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Dragons />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
