import  { View, TextInput, StyleSheet } from 'react-native';

export function TextInputComponent() {
    return (
        <View>
            <TextInput
            style={styles.input}
            value="Irvan Rizky Ariansyah"
        />
        <TextInput
            style={styles.input}
            value={100}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        </View>    
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default TextInputComponent;