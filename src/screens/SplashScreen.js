import { useNavigation } from "@react-navigation/native";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Directions, FlingGestureHandler } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

const onDownFlingHandlerStateChange = ({
    nativeEvent,
}) => {
    if (nativeEvent.oldState === State.ACTIVE) {
        progressHeight.value = withTiming(COLLAPSED_HEIGHT, {
            duration: ANIMATION_DURATION,
        });
    }
};

const onUpFlingHandlerStateChange = ({
    nativeEvent,
}) => {
    if (nativeEvent.oldState === State.ACTIVE) {
        progressHeight.value = withTiming(
            DEVICE_HEIGHT - TOP_PADDING_FOR_EXPANDED,
            {
                duration: ANIMATION_DURATION,
            },
        );
    }
};

export default function SplashScreen() {
    const navigation = useNavigation();


    const data = [
        {
            color: "#AAAAAA",
            textColor: "#000000",
            title: "Test"
        },
        {
            color: "#BBBBBB",
            textColor: "#000000",
            title: "Launching"
        }
    ]

    const leave = () => {
        navigation.navigate("HomeRouter");
    }

    return (
        <Swiper style={styles.wrapper} showsButtons={false} horizontal={false} onIndexChanged={leave}>
            {data.map((item, i) => {
                return (
                    <View
                        style={[styles.item, { backgroundColor: item.color }]}
                        key={item.title}>
                        <Text style={[styles.text, { color: item.textColor }]}>
                            {item.title}
                        </Text>
                    </View>
                );
            })}
        </Swiper>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 12,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    wrapper: {
        // flex: 1,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})