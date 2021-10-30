import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView style={styles.container} {...props}>
            <View style={styles.containerImage}>
                <Image
                source={require('../assets/images/perfil.png')}
                style={styles.img}
                />
                <Text style={styles.title}>
                    Bem-vindo !
                </Text>
            </View>


            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#003c7c',
        color:'#FFF'
    },
    containerImage:{
        width:'100%',
        height:77,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    img:{
        width:65,
        height:65
    },
    title:{
        color:'#000',
        fontSize:17,
        marginTop:5,
        marginBottom:25
    }
})