import { StyleSheet, Button, View, Text, Alert} from 'react-native';

export function ButtonComponent() {
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <View>
            <View>
                <Text style={styles.baseText}>
                    <Text style={styles.titleText}>
                        {"\n"}
                        Button Element
                    </Text>
                </Text>
                </View>
                <View>
                    <Button
                        title="Press me"
                        onPress={() => Alert.alert('You just pressed me')}
                    />
                </View>
                <Separator />

                <View style={styles.fixToText}>
                    <Button
                    title="Touch me"
                    onPress={() => Alert.alert('You just touched me')}
                    />
                    <Button
                    title="Click me"
                    onPress={() => Alert.alert('You clicked me')}
                    />
                </View>

            </View>
    )        
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});