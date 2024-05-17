import React, { Suspense, lazy } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

const MainScreenForm = lazy(() => import('../../../components/page/home/mainPageForms/MainScreenForm'));

export const MainScreenView = () =>
{
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
                <MainScreenForm />
            </Suspense>
        </>
    )
}