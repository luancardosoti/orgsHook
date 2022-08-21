import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import { carregaTopo } from '../../../services/carregaDados';
import logo from '../../../assets/logo.png' 


class Topo extends React.Component {
  state = {
    topo: {
      titulo: '',
      subtitulo: '',
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({
      topo: retorno
    })
  }

  componentDidMount() {
    this.atualizaTopo()
  }

  render() {
    return(
      <View style={styles.topo}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.titutlo}>{this.state.topo.titulo}</Text>
        <Text style={styles.subtitulo}>{this.state.topo.subtitulo}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  titutlo: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  subtitulo: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3'
  }
})

export default Topo;