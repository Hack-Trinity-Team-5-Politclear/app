import { StyleSheet, Text, View } from "react-native";
import { constituencies } from "../../assets/data/constituencies.json";
import tds from "../../assets/data/tds.json";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import TDCard from "../components/TDCard";

export default function TDListScreen({navigation}) {

    const tdList = constituencies.map((constituency) => (
        <View>
            <Text style={styles.constituencyTitle}>{constituency.name}</Text>
            <FlatList
                data={constituency.tds}
                numColumns={2}
                renderItem={({ item }) => {
                    const td = tds[item];
                    console.log(td);
                    return <TDCard key={td.name} id={item} navigation={navigation}/>
                }}
            />
        </View>
    ));


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Representatives (TDs)</Text>
            <ScrollView>
            {tdList}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 25
    },
    headerText: {
        fontSize: 20
    },
    constituencyTitle: {

    }
})