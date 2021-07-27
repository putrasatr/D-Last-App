// import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
// import Login from '../../views/containers/LoginRegister/Login';
// import Register from '../../views/containers/LoginRegister/Register';
// import Router from '../Router';
// import { useCounter } from '../../auth';
// const Stack = createStackNavigator();

// export default function AppNavigator() {
//     const { isLoginRouter, router } = useCounter()
//     console.log(router, isLoginRouter)
//     return (
//         <Stack.Navigator
//             initialRouteName={router.name}
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <Stack.Screen name={router.name} component={router.component} />
//             {/* <Stack.Screen name={isLoginRouter.name} component={isLoginRouter.component} /> */}

//             <Stack.Screen
//                 name="Register Screen"
//                 component={Register}
//                 options={{
//                     headerStyle: { backgroundColor: 'white' },
//                 }}
//             />
//             <Stack.Screen
//                 name="Tab Navigator"
//                 component={Router}
//                 options={{
//                     headerStyle: { backgroundColor: 'white' },
//                     header: {
//                         visible: false,
//                     }
//                 }}
//             />
//         </Stack.Navigator>

//     )
// }

import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { useCounter } from "../../auth"
// import { routerStack } from "../../components/router/index.stack";

const Stack = createStackNavigator();

const StackScreen = () => {
    const { isLoginRouter } = useCounter();
    console.log("AN", isLoginRouter)
    return (
        <Stack.Navigator
            initialRouteName={isLoginRouter[0].name}
            screenOptions={{
                headerShown: false
            }}>
            {isLoginRouter.map(({ name, component }, i) => (
                <Stack.Screen name={name} component={component} key={i} />
            ))}
        </Stack.Navigator>
    )
};

export default StackScreen