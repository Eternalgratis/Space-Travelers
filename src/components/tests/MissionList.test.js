import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MissionList from '../Missions/MissionList';
import store from '../../redux/configureStore';

describe('MyMissionList components', () => {
  it('MissionList Components Renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
