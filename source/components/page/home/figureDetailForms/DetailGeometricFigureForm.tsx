import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { figureScreenFormTheme } from '../homeTheme';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../../../navigators/StackNavigator';

interface DetailGeometricFigureFormProps {
    navigator: StackNavigationProp<RootStackParams, "DetailGeometricFigure", undefined>;
    figureId: number;
}

const lottieSources = {
    triangulo:  require('../../../../assets/lotties/triangle.json'),
    cuadrado:   require('../../../../assets/lotties/square.json'),
    rectangulo: require('../../../../assets/lotties/rectangle.json'),
};

const DetailGeometricFigureForm = ( { navigator, figureId }: DetailGeometricFigureFormProps ) =>
{
    const navigateBack = () => {
        navigator.goBack();
    };

    const [ figure, setFigure ] = useState({ uri: '' });

    useEffect(() => {
        myFigure();
    }, []);

    const myFigure = () => {
        ( figureId === 1 ) && setFigure( lottieSources[ 'triangulo' ] );
        ( figureId === 2 ) && setFigure( lottieSources[ 'cuadrado' ] );
        ( figureId === 3 ) && setFigure( lottieSources[ 'rectangulo' ] );
    };

    return (
        <View style={[ figureScreenFormTheme.container ]}>
            <View style={[ figureScreenFormTheme.backButtonContainer ]}>
                <TouchableOpacity
                    onPress={ () => navigateBack() }
                    style={[ figureScreenFormTheme.backButton ]}
                >
                    <Icon name="arrow-back-ios" size={30} color="#1C1C1E" />
                    <Text style={[ figureScreenFormTheme.backButtonText ]}>Volver</Text>
                </TouchableOpacity>
            </View>

            <Text style={[ figureScreenFormTheme.title ]}>Figura seleccionada</Text>

            {
                ( figure )
                    && <>
                        <LottieView
                            source={ figure }
                            style={{ width: "50%", height: "25%" }}
                            autoPlay
                            loop
                        />
                    </>
            }

        </View>
    )
}

export default DetailGeometricFigureForm;