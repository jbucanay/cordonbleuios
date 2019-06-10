import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function Game(props){
    
    
const target = 10 + Math.floor(40*Math.random())
const randArra = Array.from({length: props.randNumCount}).map(()=> 1+ Math.floor(10*Math.random()))

    return (
        <View style={styles.cont}>
            <Text style={styles.target}>{target}</Text>
            <Text>{props.randNumCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    
    },
    target: {
        marginTop: 60,
        fontSize: 30,
        textAlign: "center",
        backgroundColor: '#aaa',
        padding: 4,
        width: 200
    }
    
})