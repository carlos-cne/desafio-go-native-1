import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Post = ({ title, author, message }) => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>
      {title}
    </Text>
    <Text style={styles.textAuthor}>
      {author}
    </Text>
    <View>
      <Text>
        {message}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textHeader: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: 10,
  },
  textAuthor: {
    bottom: 10,
    borderColor: '#EEEEEE',
  },
  textMessage: {
    color: '#666666',
  },
});
export default Post;
