import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import List from './src/screens/List';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: List,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorsScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
