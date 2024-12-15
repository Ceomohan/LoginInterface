import { useEffect, useState } from "react"
import {Text,View,TextInput,StyleSheet,Button} from "react-native"
import {signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth"
import auth from "../services/firebaseAuth"

const LoginScreen = ({navigation})=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const onCheckIfLoggedIn = ()=>{
          onAuthStateChanged(auth,(user)=>{
            if(user){
                navigation.navigate('Dashboard')
            }
        })
    }

    useEffect(()=>{
        onCheckIfLoggedIn()
    },[])

    const handleLogin = ()=>{
        setError('')
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user
            console.log(user)
            navigation.navigate('Dashboard')
        })
        .catch((error)=>{
            setError(error.message)
        })

        
    }
    const goToRegister = ()=>{
        navigation.navigate('Register')
    }

    return(
        <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Login</Text>
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
            <Button title="Login" onPress={handleLogin}/>
            {error && <Text style={{color:'red'}}>{error}</Text>}
        <Text style={{marginVertical:10}} onPress={goToRegister}>
            Create an Account! Register Here
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

export default LoginScreen