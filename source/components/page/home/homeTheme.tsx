import { StyleSheet } from "react-native";

export const mainScreenFormTheme = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#1C1C1E',
        fontSize: 23,
        fontWeight: '700',
        marginBottom: '10%',
    },
    listItemContainer: {
        marginTop: '10%',
    },
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 70,
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

export const figureScreenFormTheme = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    backButtonContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        width: '100%',
    },
    backButton: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    backButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1C1C1E'
    },
    title: {
        color: '#1C1C1E',
        fontSize: 23,
        fontWeight: '700',
        marginBottom: '10%',
    },
});