
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