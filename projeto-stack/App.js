import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Telas do Drawer Navigator (menu lateral)
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Perfil</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Configurações</Text>
    </View>
  );
}

// O Navegador do Menu (Drawer) que contém as três telas
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Configurações" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

// O Navegador Principal (Stack) que conterá o menu lateral
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* A tela 'Menu' é na verdade o seu Drawer.Navigator */}
        <Stack.Screen
          name="Menu"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Oculta o cabeçalho padrão da stack
        />
        {/* Adicione outras telas que não estarão no menu, se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}