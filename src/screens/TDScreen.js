import { StyleSheet, Text, View } from "react-native";
import tds from "../../assets/data/tds.json";
import { Image } from "expo-image"
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TDScreen({ route, navigation }) {
    const { td } = route.params;
    const profile = tds[td];
    console.log(profile.headshot);
    return (
        <View>
            <View>
                <Text>{profile.name}</Text>
            </View>
            <Image source={profile.headshot} style={{ width: 60, height: 60 }} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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