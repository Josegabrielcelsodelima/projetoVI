import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import DetailsScreen from "./src/details";
import HomeScreen from "./src/home";
import ProfileScreen from "./src/profile";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}           
        />
        <Drawer.Screen 
          name="Details" 
          component={DetailsScreen}           
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen}           
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}