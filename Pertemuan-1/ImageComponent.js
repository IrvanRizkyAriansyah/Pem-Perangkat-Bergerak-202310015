import { Text, View, Image } from "react-native";
import LogoIBIK from "../Pem-Perangkat-Bergerak-202310015/assets/ibik.png";

export function ImageComponent(){
    return (
        <View>
            <View>
            <Text>{"\n"} Fetching from URL </Text>
                <Image
                    source={{uri: "https://spmi.lldikti4.or.id/files/042016/042016_logo.jpg"}}
                    style={{width: 200, height: 200}}
                />
                <Text>Institute Bisnis dan Informatika Kesatuan Bogor</Text>
            </View>
            <View>
            <Text>{"\n"} Fetching from local storage</Text>
                <Image
                    source={ LogoIBIK }
                    style={{width: 200, height: 200}}
                />
                <Text>Institute Bisnis dan Informatika Kesatuan Bogor</Text>
                </View>
        </View>
    )
}
export default ImageComponent;