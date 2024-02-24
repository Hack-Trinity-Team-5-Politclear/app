import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image"
import ireland_map from "../../../assets/ireland_constituency_map.png"
import useDimensions from "../../state/hooks/useDimensions";
import RelativeToBg from "../../components/layout/RelativeToBg";


export default function HomeScreen() {
    const { scaledImageDimensions } = useDimensions(ireland_map);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Home</Text>
                <Text style={styles.subtitle}>Select a constituency to get started...</Text>
            </View>
            <ImageBackground
                source={ireland_map}
                resizeMode="center"
                style={{
                    ...styles.image,
                    top: 0 - scaledImageDimensions.yZero,
                    left: 0 - scaledImageDimensions.xZero,
                    width: scaledImageDimensions.width,
                    height: scaledImageDimensions.height,
                }}
            />
            <RelativeToBg relativeDimensions={{ x: 0.420, y: 0.24, w: 0.2, h: 0.130 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,0,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        console.log("pressed donegal");
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.28, y: 0.46, w: 0.16, h: 0.090 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(50,0,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        console.log("pressed galway west");
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.24, y: 0.59, w: 0.17, h: 0.140 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,50,0,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        console.log("pressed kerry");
                    }}
                />
            </RelativeToBg>
            <RelativeToBg relativeDimensions={{ x: 0.65, y: 0.46, w: 0.08, h: 0.090 }}>
                <Pressable
                    style={{
                        height: "100%",
                        width: "100%",
                        // backgroundColor: "rgba(0,0,50,0.4)", // used for development
                        zIndex: false ? 0 : 10,
                    }}
                    onPress={() => {
                        console.log("pressed dublin");
                    }}
                />
            </RelativeToBg>
            <Image style={styles.map} source={ireland_map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        marginTop: 40
    },
    titleContainer: {
        paddingLeft: 25,
        paddingTop: 40,
        marginBottom: 50,
    },
    title: {
        fontSize: 36
    },
    image: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        margin: 0,
    },
})