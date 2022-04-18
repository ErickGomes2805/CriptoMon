import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import Cadastro from '../pages/Cadastro'
import Moedas from '../pages/moedas'


const Stack = createNativeStackNavigator();

export default  function Routes(){
    return(
        <Stack.Navigator>
        <Stack.Screen
            name = "Welcome"
            component = {Welcome}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name = "SignIn"
            component = {SignIn}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name = "Cadastro"
            component = {Cadastro}
            options={{headerShown:false}}
        />

        <Stack.Screen
            name = "Moedas"
            component = {Moedas}
            options={{headerShown:false}}
        />

        

    </Stack.Navigator>
        
    )
}