import { Component, StyleSheet } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { ImageComponent } from "./ImageComponent";
import { TextComponent } from "./TextComponent";
import { TextInputComponent } from "./TextInputComponent";
import { ViewComponent } from "./ViewComponent";


export default class App extends Component{
    render(){
        return(
            <>
            <ViewComponent />
            <TextComponent />
            <ButtonComponent />
            <ImageComponent />
            <TextInputComponent />
            </>
        )
    }
}