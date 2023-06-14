import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';
import HomePage from "./src/pages/homepage";
import DetailsPage from "./src/pages/detailspage";


const stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="home" component={HomePage}/>
                <stack.Screen name="details" component={DetailsPage}/>
            </stack.Navigator>
        </NavigationContainer>
        
    )
}