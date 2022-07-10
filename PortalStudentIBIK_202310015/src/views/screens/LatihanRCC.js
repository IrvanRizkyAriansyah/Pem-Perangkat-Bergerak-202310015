import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LatihanRCC extends Component {
    constructor(props) {
        super(props);
        this.TextTitle = this.TextTitle.bind(this);
        this.StudentData1 = this.StudentData1.bind(this);
        this.StudentData2 = this.StudentData2.bind(this);
        this.state = {
            hari: "Sabtu",
            kelas: "Reguler TI-20 PA"
        };
    }

    TextTitle(param) {
        return <Text>{param.data}</Text>;
    }

    StudentData1(param) {
        return (
            <View>
            <Text>Student ID : {param.id}</Text>
            <Text>Student Name : {param.name}</Text>
            </View>
        )
    }

    StudentData2(id, name) {
        return(
            <View>
                <Text>Student ID : {id}</Text>
                <Text>Student Name : {name}</Text>
            </View>
        )
    }

    // StudentData1 = (param) =>{
    //     return(
    //         <View>
    //             <Text>Student ID : {param.id}</Text>
    //             <Text>Student Name : {param.name}</Text>
    //         </View>
    //     )
    // }
    
    // StudentData2 = (id,name) =>{
    //     return(
    //         <View>
    //             <Text>Student ID : {id}</Text>
    //             <Text>Student Name : {name}</Text>
    //         </View>
    //     )
    // }

    render() {
        const TrimSchedule = () =>{
            let waktu = "07.00-10.00";
            return (
                <View>
                    <Text>Hari : {this.state.hari}</Text>
                    <Text>Pukul : {waktu}</Text>
                    <Text>Kelas : {this.state.kelas}</Text>
                </View>
            )
        }
        
        return (
            <View>
                <Text>LatihanRCC</Text>
                {this.TextTitle({ data: "Pemrograman Perangkat Bergerak "})}
                {this.StudentData1({ id:"202310042", name:"Muhammad Muklis" })}
                {this.StudentData2(202310013,"Achmad Afif Abijar")}
                {/* {TrimSchedule()} */}
            </View>
        );
    }
}

// const styles = StyleSheet.create({})

export default LatihanRCC;
