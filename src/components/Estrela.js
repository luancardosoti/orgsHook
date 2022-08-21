import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({
  onPress,
  disabled = true,
  preenchida,
  grande = false
}) {
  const getImage = () => {
    return preenchida ? estrela : estrelaCinza
  }

  const styles = stylesFunction(grande);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      <Image  source={getImage()} style={styles.estrela}/>
    </TouchableOpacity>
  )
}

const stylesFunction = (grande) => StyleSheet.create({
  estrela: {
    width: grande ? 36 : 12,
    height: grande ? 36 : 12,
    marginRight: 2
  },
})