import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LearnScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Learn</Text>
                <Text style={styles.subtitle}>Learn more about Ireland and its political past through simple activities.</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.learnCard} onPress={() => {
                    navigation.navigate("LearnActivity", {activity: "basic_questions"});
                }}>
                    <Text style={styles.learnTitle}>1. </Text>
                    <Text style={styles.learnSubtitle}>Simple History</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginTop: 40
    },
    header: {

    },
    title: {
        fontSize: 24
    },
    subtitle: {
        fontSize: 15
    },
    learnCard: {
        backgroundColor: "#CCCCCC",
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5,
        flexDirection: "row"
    },
    learnTitle: {
        fontSize: 24,
        fontWeight: "bold"
    },
    learnSubtitle: {
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 30
    },
    button: {
        marginTop: "auto",
        backgroundColor: "#95d5b2",
        padding: 10,
        maxWidth: 200
    },
    buttonText: {
        textAlign: "center"
    }
})