/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesView from './pages/categories/categories';
import RecipesView from './pages/recipes/recipes';
import DetailView from './pages/detail/detail';
import WebViewPage from './pages/web_view/web_view';

const Stack = createNativeStackNavigator();
const App = () => {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="CATEGORIES" component={CategoriesView} />
      <Stack.Screen name="RECIPES" component={RecipesView} />
      <Stack.Screen name="RECIPE DETAIL" component={DetailView} />
      <Stack.Screen name="WEB" component={WebViewPage} options={{ title: '' }} />
    </Stack.Navigator>
  </NavigationContainer>);
};

export default App;
