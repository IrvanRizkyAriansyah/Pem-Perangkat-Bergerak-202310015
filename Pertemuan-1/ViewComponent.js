import { View, Text } from "react-native";

export function ViewComponent(){
    return(
        <View
        style={{
            flexDirection: "row",
            height: 100,
            backgroundColor: "yellow",
            padding: 20
        }}
        >
            <View style={{ backgroundColor: "blue", width:100 }} />
            <View style={{ backgroundColor: "red", flex: 0.5, marginLegt:3}} />
            </View>
    )  
}


export default ViewComponent;