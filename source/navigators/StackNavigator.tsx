import { createStackNavigator } from '@react-navigation/stack';

import { MainScreenView } from '../views/home/mainPage/MainScreenView';
import { DetailGeometricFigure } from '../views/home/figureDetail/DetailGeometricFigure';

export type RootStackParams = {
    MainScreenView: undefined,
    DetailGeometricFigure: { figureId: number },
};

const Stack = createStackNavigator<RootStackParams>();

interface AnimationConfig {
    stiffness: number;
    damping: number;
    mass: number;
    overshootClamping: boolean;
    restDisplacementThreshold: number;
    restSpeedThreshold: number;
};

interface Transition {
    animation: "timing" | "spring";
    config: Omit<AnimationConfig, "toValue" | keyof AnimationConfig>;
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='MainScreenView'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen name="MainScreenView"        component={ MainScreenView } options={{ transitionSpec: { open: config, close: config } }} />
            <Stack.Screen name="DetailGeometricFigure" component={ DetailGeometricFigure } options={{ transitionSpec: { open: config, close: config } }} />

        </Stack.Navigator>
    );
};

const timerConfigurationConfig: Omit<AnimationConfig, "toValue" | keyof AnimationConfig> = {
    stiffness: 700,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
};

const config: Transition = {
    animation: 'timing',
    config: timerConfigurationConfig,
};