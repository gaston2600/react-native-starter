import { StyleSheet } from "react-native";
import { colors } from "@styles";
import { height, width } from "@common";

const homeStyle = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    searchContainer: {
        height: height * 0.32,
        width: width * 0.9,

        backgroundColor: colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    driverSearchContainer: {
        height: height * 0.40,
        width: width * 0.95,
        backgroundColor: colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    headerContainer: {
        position: "absolute",
        top: 40,
        left: 10,
        zIndex: 99,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    description: {
        color: colors.grey,
        fontSize: 12,
        marginVertical: 5
    },
    speed: {
        color: colors.grey,
        alignSelf: "center",
        textAlign: "center",
        paddingTop: 0,
        marginLeft: 10,
        fontSize: 14
    },
    title: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 5

    },
    menuButton: {
        width: 60,
        height: 50,
        zIndex: 999,
        alignItems: "center",

        paddingVertical: 10,
        paddingHorizontal: 15
    },
    menuIcon: {
        color: '#333',
        fontWeight: "normal",
        zIndex: 9999,
    },
    infosText: {
        // flex: 1,
        color: colors.gray,
        marginHorizontal: 10,
        marginTop: 2
    },
    divider: {
        margin: 10,

    },
    address: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5

    },
    addressText: {
        // flex: 1,
        // color: colors.primary,
        fontSize: 13,
        fontWeight: "400",
        marginHorizontal: 10,
    },
    paymenContent: {
        flexDirection: "row",
        marginHorizontal: 5,
    },
    price: {
        color: colors.primary,
        marginHorizontal: 10
    },
    titleText: {
        // flex: 1,
        // color: colors.primary,
        fontSize: 18,
        fontWeight: "600",
        marginHorizontal: 10,
    },
    info: {
        fontSize: 14,
        fontWeight: "400",
        marginHorizontal: 10,
        color: colors.gray
    },
    share: {
        marginHorizontal: 7,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 100,
        padding: 16,

        // width: 50, height: 50,
        // justifyContent: "center",
        // alignItems: "center",
        alignSelf: "center"
    },
    myLocation: {
        backgroundColor: colors.white,
        borderRadius: 100, width: 50, height: 50,
        justifyContent: "center", alignItems: "center",
        margin: 20, alignSelf: "flex-end"
    },

    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 100,
    },
    stepIndex: { height: 3, width: 10, backgroundColor: colors.grey, margin: 1, borderRadius: 2 },
    cancelText:{ alignSelf: "center", margin: 15, textAlign: "center", color: colors.black },
});
export default homeStyle;