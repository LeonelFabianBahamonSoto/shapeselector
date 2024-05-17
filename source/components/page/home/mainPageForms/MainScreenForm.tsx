import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import MultiSelect from 'react-native-multiple-select';

import { mainScreenFormTheme } from '../homeTheme';
import { RootStackParams } from '../../../../navigators/StackNavigator';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface itemsInterface {
    id: number;
    name: string;
};

const items = [
    {id: 1, name: 'Triangulo'},
    {id: 2, name: 'Cuadrado'},
    {id: 3, name: 'Rectangulo'},
    {id: 4, name: 'Ninguno'},
];

const MainScreenForm = () =>
{
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const [ selectedItems, setSelectedItems ] = useState<itemsInterface[]>([]);

    const onSelectedItemsChange = ( item: itemsInterface[] ) => {
        const id: number = Number( item[0] );

        ( id === 4 )
            ? setSelectedItems([])
            : setSelectedItems( item );
    };

    const navigateDetailInterface = () => {
        const id = Number( selectedItems[0] );
        navigation.navigate( 'DetailGeometricFigure', { figureId: id } );
    };

    return (
        <View style={[ mainScreenFormTheme.container ]}>
            <Text style={[ mainScreenFormTheme.title ]} >Shape Selector</Text>

            <LottieView
                source={require("../../../../assets/lotties/Animation.json")}
                style={{ width: "50%", height: "25%" }}
                autoPlay
                loop
            />

            <View style={{ marginTop: 10, height: 'auto', width: "90%" }}>
                <MultiSelect
                    hideTags
                    items={ items }
                    uniqueKey="id"
                    onSelectedItemsChange={ onSelectedItemsChange }
                    selectedItems={ selectedItems }
                    selectText={ "Mostrar figuras geométricas" }
                    searchInputPlaceholderText={ "Ingrese el nombre de la figura" }
                    onChangeInput={(text) => console.log( '---> TEXT: ', text)}
                    selectedItemTextColor="#37c61b"
                    selectedItemIconColor="white"
                    itemTextColor="#434b4d"
                    displayKey="name"
                    searchInputStyle={{ backgroundColor: '#ffffff', color: '#1C1C1E' }}
                    submitButtonColor="#37c61b"
                    submitButtonText="Submit"
                    single={ true }
                    searchIcon={ <Icon name="search" size={20} color="#434b4d" /> }
                    styleIndicator={{ opacity: 0, height: '25%' }}
                    hideDropdown={ true }
                    styleDropdownMenuSubsection={{ backgroundColor: '#e7ebda', paddingLeft: '7%' }}
                    styleItemsContainer={{ backgroundColor: '#ffffff' }}
                    styleMainWrapper={{ backgroundColor: '#ffffff' }}
                    fontSize={ 15 }
                />
            </View>

            <TouchableOpacity
                disabled={ ( selectedItems.length > 0 ) ? false : true }
                style={[
                    ( selectedItems.length > 0 ) ? { backgroundColor: '#258f41' } : { backgroundColor: '#141414' },
                    mainScreenFormTheme.buttonContainer
                ]}
                onPress={ () => navigateDetailInterface() }
            >
                <Text style={[ mainScreenFormTheme.textButton ]}>Aceptar</Text>
                <Icon name="check-circle" size={ 25 } color="white" style={{ marginLeft: 20 }} />
            </TouchableOpacity>

        </View>
    )
}

export default MainScreenForm;