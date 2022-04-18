import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

async function getpokenome(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/132/')
        return response.json()
    }

    getpokenome().then( data => {
        const nome = data.name
      
        console.log(nome)
      })

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container} >
            
            <Animatable.View animation={'fadeInLeft'} delay={700} style={styles.containerHeader} >

            <Text style={styles.message} >Faça seu login</Text>

            </Animatable.View>
            
            <Animatable.View animation={'fadeInUp'} style={styles.containerForm}  >
                <Text style={styles.title} >User</Text>
                <TextInput
                    placeholder='Digite seu usuário'
                    style={styles.input}
                />

                <Text style={styles.title} >Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Moedas')} >
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={()=>navigation.navigate('Cadastro')} >
                    <Text style={styles.registerText} >Cadastre-se</Text>
                </TouchableOpacity>
                
            </Animatable.View>

        </View>
    );   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0ffde6',
    },

    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        padding:'5%',
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',
    },

    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },

    title:{
        fontSize:20,
        marginTop:28,
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
    },
    button:{
        backgroundColor:'#0ffde6',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center',
    },

    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },

    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
    },

    registerText:{
        color:'#a1a1a1',
    }
})