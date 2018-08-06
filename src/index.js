import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';
import 'config/ReactotronConfig';
import Post from 'Post';

console.tron.log("peguei")

export default class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Carlos Queiroz',
        message:
          'Dado o fluxo de dados atual, a otimização de performance da renderização do DOM complexificou o merge na interpolação dinâmica de strings.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Carlos Queiroz',
        message:
          'A grandeza vem não quando as coisas sempre vão bem para você, mas a grandeza vem quando você é realmente testado, quando você sofre alguns golpes, algumas decepções, quando a tristeza chega. Porque apenas se você esteve nos mais profundos vales você poderá um dia saber o quão magnífico é se estar no topo da mais alta montanha.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Carlos Queiroz',
        message:
          'Não ame pela beleza, pois um dia ela acaba. Não ame por admiração, pois um dia você se decepciona. Ame apenas, pois o tempo nunca pode acabar com um amor sem explicação.',
      },
      {
        id: Math.random(),
        title: 'Aprendendo React Native',
        author: 'Carlos Queiroz',
        message:
          'Dado o fluxo de dados atual, a otimização de performance da renderização do DOM complexificou o merge na interpolação dinâmica de strings.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>
GoNative App
          </Text>
        </View>

        <ScrollView style={styles.scroll}>
          {this.state.posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} message={post.message} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EE7777',
  },
  header: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scroll: {
    
  },
});
