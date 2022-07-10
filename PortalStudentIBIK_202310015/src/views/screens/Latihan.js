import {Text, View} from 'react-native'
import React from 'react'

const TextTitle = (param) => {
    return(
        <Text>{param.data}</Text>
    )
}

const StudentData1 = (param) =>{
    return(
        <View>
            <Text>Student ID : {param.id}</Text>
            <Text>Student Name : {param.name}</Text>
        </View>
    )
}

const StudentData2 = (id,name) =>{
    return(
        <View>
            <Text>Student ID : {id}</Text>
            <Text>Student Name : {name}</Text>
        </View>
    )
}

const hari = "Sabtu";

export function Latihan(){
    // var kelas = "Reguler TI-20 PA";

    // const TrimSchedule = () =>{
    //     let waktu = "07.00-10.00";
    //     return (
    //         <View>
    //             <Text>Hari : {hari}</Text>
    //             <Text>Pukul : {waktu}</Text>
    //             <Text>Kelas : {kelas}</Text>
    //         </View>
    //     )
    // }

    return (
        <View>
        {/* <Text> Latihan </Text>
        <TextTitle data="Pemrograman Perangkat Bergerak" />
        {TextTitle({data:"Pertemuan ke 7"})}

        <TrimSchedule /> */}
        <StudentData1 id="202310042" name="Muhammad Muklis" />
        {StudentData2(202310013,"Achmad Afif Abijar")}
        </View>
    )
}

export default Latihan;