import React, { Suspense, lazy } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailGeometricFigure'> {};

const DetailGeometricFigureForm = lazy(() => import('../../../components/page/home/figureDetailForms/DetailGeometricFigureForm'));

export const DetailGeometricFigure = ( { navigation, route }: Props ) =>
{
    const { params } = route;

    return(
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: '#1C1C1E' }}/>
            <StatusBar
                animated={ true }
                backgroundColor='#1C1C1E'
                barStyle='light-content'
                showHideTransition='fade'
            />
            <Suspense fallback={ <ActivityIndicator size="small" color="#0000ff" /> }>
                <DetailGeometricFigureForm navigator={navigation} figureId={params.figureId} />
            </Suspense>
        </>
    )
}