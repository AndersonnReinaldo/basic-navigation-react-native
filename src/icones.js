import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

//IMPORTACAO DAS FONTES DE ICONES
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'


const Icons = () => {
    return (
        <View style={styles.container}>
          <Text>Anderson Reinaldo</Text>

          <FontAwesome
          name="home"
          size={35}
          color="#11118c"
          />

          <FontAwesome
          name="user"
          size={25}
          color="#54a300"
          />
          <Feather
          name="gift"
          size={65}
          color="#7665ff"
          />
        <TouchableOpacity style={styles.btnYoutube}>
            <FontAwesome 
            name="youtube"
            size={25}
            color="#FFF"         
            />
            <Text style={styles.btnAcessar}> Acessar canal </Text>
        </TouchableOpacity>
    
        </View>
    )
}

export default Icons

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnYoutube:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        backgroundColor:'#FF0000',
        borderRadius:5
    },
    btnAcessar:{
        paddingLeft:10,
        color:'#FFF'
    }


})
