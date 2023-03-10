import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../../context/AuthContext'
import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View>
      <Text style={{fontSize:24, alignSelf:'center'}}>Home, sweet home</Text>
      <CustomButton text="Logout" onPress={logout} type="PRIMARY"></CustomButton>
    </View>
  )
}

export default HomeScreen