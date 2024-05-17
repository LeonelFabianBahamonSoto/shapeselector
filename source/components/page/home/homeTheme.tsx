import { StyleSheet } from "react-native";

export const mainScreenFormTheme = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: 'center',
    },
    listItemContainer: {
        marginTop: '10%',
    },
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#258f41',
        borderRadius: 10,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 40,
        paddingHorizontal: '20%',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 5,
        zIndex: 2,
    },
    textButton: {
        fontSize: 17,
        fontWeight: '500',
        color: 'white',
    },
});