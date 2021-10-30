import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { useNavigation, StackActions } from '@react-navigation/native'


const Contato = ({route}) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <Button title="Voltar para sobre" onPress={() => navigation.goBack()}/>
            <Button title="Voltar para home" onPress={() => navigation.dispatch(StackActions.popToTop)}/>
        </View>
    )
}

export default Contato

const styles = StyleSheet.create({
    container:{
        flex:1
    }


})
