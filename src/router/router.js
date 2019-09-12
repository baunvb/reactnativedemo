import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Icon, TabBar } from "../components";
import {
  HomeScreen,
  SearchScreen,
  FavoritesScreen,
  ProfileScreen
} from "../screens";

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      }
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />
      }
    },
    FavoritesScreen: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="favorites" color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
      }
    }
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#4F4F4F",
      inactiveTintColor: "#ddd"
    }
  }
);

export default createAppContainer(TabNavigator);