import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)


    const sendDataToApi = async (data) =>{

        try{
            console.log(email, password)
            const response = await axios.post('http://localhost:3000/login',
            JSON.stringify({email, password}),
            {
                    headers: {'Content-Type': 'application/json'}
            }
            );
    
            console.log(response.data)
            if(response.data){
                setUser(response.data)
            }
            
    
        }catch(err){
            if(!err?.response){
                setError('Erro ao acessar o servidor');
            }else if (err.response.status === 401){
                setError('Usuário ou senha inválidos');
            }
        }
    }

    const navegaHome = (data) =>{
        if (user != null){
            navigation.navigate('Home', user)
        } 
    }
    
    navegaHome()



    // const users = [{
    //     nome: 'Julia',
    //     email: 'teste@gmail.com',
    //     password: '123456',
    //     segredo: 'julinha eh linda'
    // },]

    // function handleButton() {
    //     const user = users.find(user => user.password === password && user.email === email)
    //     if (user){
    //         navigation.navigate('Home', user)
    //     }else{
    //         return console.log('senha ou usuario incorretos')
    //     }
    // }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite o seu email'
                    style={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite a sua senha'
                    style={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TouchableOpacity style={styles.button} onPress={sendDataToApi}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})