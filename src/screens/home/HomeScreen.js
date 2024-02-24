import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
import map from "../../../assets/Irish_constituencies.svg"


export default function HomeScreen() {
    return (
        <View>
            <Image source={map}/>
        </View>
    )
}

const styles = StyleSheet.create({

})