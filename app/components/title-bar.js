import React, {
  StyleSheet,
  Component,
  View,
  Text
} from 'react-native';

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={styles.button}></Text>
        <Text style={styles.title}>Todos</Text>
        <Text style={styles.button}>Add</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  button: {
    width: 50,
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default TitleBar;
