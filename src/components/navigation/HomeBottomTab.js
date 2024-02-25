import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeBottomTab() {
    return (
        <View style={styles.container}>
            <TabItem
                icon="list"
                label="TDs"
            />
            <TabItem
                icon="home"
                label="Home"
            />
            <TabItem
                icon="graduation-cap"
                label="Learn"
            />
            <TabItem
                icon="newspaper-o"
                label="Local"
            />
        </View>
    )
}

const TabItem = ({ label, icon }) => {
    return (
        <TouchableOpacity style={styles.tabItemContainer}>
            <Icon name={icon} size={34} color="#007F5F" />
            <Text style={styles.tabItemLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 12,
        paddingBottom: 22,
        backgroundColor: "#95d5b2"
    },
    tabItemContainer: {
        alignItems: "center",
        width: 70
    },
    tabItemLabel: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700"
    }
})