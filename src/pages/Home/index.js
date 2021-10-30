import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

    function irSobre(){
        navigation.navigate('Sobre', {nome: 'Anderson', email:'andersonnreinaldo@gmail.com'});

    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para Sobre" onPress={irSobre}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    }


})
