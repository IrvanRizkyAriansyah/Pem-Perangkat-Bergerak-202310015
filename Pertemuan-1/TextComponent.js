import { StyleSheet, Text } from 'react-native';
export function TextComponent(){
    //hooks
    const titleText = "Pem Perangkat Bergerak";
    const bodyText = "You just tried <text> element on react";
    //end hooks
    return (
        <Text style={styles.baseText}>
            <Text style={styles.titleText}>
            {titleText}
            {"\n"}
            {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default TextComponent;