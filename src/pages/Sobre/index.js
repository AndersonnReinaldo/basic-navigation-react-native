import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'


const Sobre = ({route}) => {

    const navigation = useNavigation();

    navigation.setOptions({
        title: `Sobre ${route.params?.nome}`
    })

    return (
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title="Voltar para home" onPress={() => navigation.goBack()}/>
            <Button title="Contato" onPress={() => navigation.toggleDrawer()}/>
        </View>
    )
}

export default Sobre

const styles = StyleSheet.create({
    container:{
        flex:1
    }


})
