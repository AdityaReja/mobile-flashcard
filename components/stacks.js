import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import TabNav from './tabs';
import DeckMenu from './deckMenu';
import {Colors} from '../Utils/colors';
import Quiz from './quiz';
import AddCard from './addCard';

const StackNav = createStackNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: {
        header: null,
      },
    },
    DeckMenu: {
      screen: DeckMenu,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
      }),
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: ({navigation}) => ({
        title: `Add Card`,
      }),
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: ({navigation}) => ({
        title: `${navigation.state.params.title}`,
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        height: 40,
        backgroundColor: Colors.black,
        borderBottomColor: Colors.secondaryColor,
      },
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(StackNav);
