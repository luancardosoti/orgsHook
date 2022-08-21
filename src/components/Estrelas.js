import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Estrela from './Estrela';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga)

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for(let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i+1)}
          disabled={!editavel}
          grande={grande}
          preenchida={i < quantidade}
        />
      )
    }
    return listaEstrelas;
  }

  return (
    <View style={styles.container}>
      <RenderEstrelas />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})