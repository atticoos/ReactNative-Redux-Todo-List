'use strict';
import React, {
  Component,
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';

class Filters extends Component {
  render() {
    var {showAll, showCompleted, showIncomplete, active} = this.props;
    return (
      <View style={styles.bar}>
        <TouchableOpacity style={styles.button} onPress={showAll}>
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showCompleted}>
          <Text style={styles.text}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showIncomplete}>
          <Text style={styles.text}>Incomplete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#81c04d',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row'
  },
  button: {
    flex: 1
  },
  text: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Filters;
