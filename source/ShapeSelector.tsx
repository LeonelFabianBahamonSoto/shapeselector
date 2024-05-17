import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './navigators/StackNavigator';

export const ShapeSelector = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}