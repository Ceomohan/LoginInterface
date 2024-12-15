
import { View , Text, Button } from "react-native"
import { signOut,onAuthStateChanged } from "firebase/auth"
import auth from "../services/firebaseAuth"

const DashboardScreen = ({navigation}) => {
    const handleLogout = ()=>{
        signOut(auth)
        .then(()=>navigation.navigate('Login'))
      
    }

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{marginVertical:10}}>Welcome to DashBoard</Text>
        <Button onPress={handleLogout} title="LogOut"/>
    </View>
  )
}

export default DashboardScreen