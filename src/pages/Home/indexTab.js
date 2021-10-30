import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
 const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Contato" onPress={() => navigation.navigate('Contato')}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    }


})
