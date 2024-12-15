import { useState } from "react"
import {Text,View,TextInput,StyleSheet,Button} from "react-native"
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../services/firebaseAuth"

const RegisterScreen = ({navigation})=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const handleRegister = ()=>{
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user
            navigation.navigate('Login')
        })
        .catch((error)=>{
            setError(error.message)
        })        
    }
    const goToLogin = ()=>{
        navigation.navigate('Login')
    }

    return(
        <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Register</Text>
            <TextInput placeholder="Email" 
            style={styles.textInput}
            onChangeText={setEmail}
            />
            <TextInput 
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister}/>
            {error && <Text style={{color:'red'}}>{error}</Text>}
        <Text style={{marginVertical:10}} onPress={goToLogin}>
            Already have an Account! Login Here
        </Text>

        </View>
    )

}

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'gray',
        marginVertical:10,
        paddingHorizontal:10,
        width:200
    }
})

export default RegisterScreen