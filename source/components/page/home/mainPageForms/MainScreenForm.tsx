import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MultiSelect from 'react-native-multiple-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { mainScreenFormTheme } from '../homeTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> {};

interface itemsInterface {
    id: number;
    name: string;
};

const items = [
    {id: 1, name: 'Triangulo'},
    {id: 2, name: 'Cuadrado'},
    {id: 3, name: 'Rectangulo'},
];

const MainScreenForm = ({ navigation }: Props ) =>
{
    const [ selectedItems, setSelectedItems ] = useState<itemsInterface[]>([]);

    const onSelectedItemsChange = ( item: itemsInterface[] ) => {
        setSelectedItems( item );
    };

    return (
        <View style={[ mainScreenFormTheme.container ]}>
            <Text>Esta es la pagina 1</Text>
            <Icon name="lock" size={30} color="#900" />

            <View style={{ marginVertical: 50, height: 'auto', width: "90%" }}>
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

            <TouchableOpacity style={[ mainScreenFormTheme.buttonContainer ]} >
                <Text style={[ mainScreenFormTheme.textButton ]}>Aceptar</Text>
                <Icon name="check-circle" size={ 25 } color="white" style={{ marginLeft: 20 }} />
            </TouchableOpacity>


        </View>
    )
}

export default MainScreenForm;