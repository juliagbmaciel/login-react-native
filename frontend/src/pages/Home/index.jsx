import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { useRoute } from '@react-navigation/native';



function Home({props}) {
  const route = useRoute()

  const user = route.params;


  return (
    <div>
        <h1>Bem vinda {user.nome}</h1>
    </div>
  )
}

export default Home