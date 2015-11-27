'use strict';
import React, {
  Component,
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {VisibilityFilters} from '../actions/actionTypes';

function capitalize (word) {
  var lower = word.toLowerCase();
  return lower.slice(0, 1).toUpperCase() + lower.slice(1);
}

class Filters extends Component {
  render() {
    return (
      <View style={styles.bar}>
        {this.renderFilters()}
      </View>
    );
  }
  renderFilters() {
    var {showAll, showCompleted, showIncomplete, activeFilter} = this.props;
    return [
      {name: VisibilityFilters.ALL, action: showAll},
      {name: VisibilityFilters.COMPLETED, action: showCompleted},
      {name: VisibilityFilters.INCOMPLETE, action: showIncomplete}
    ].map(filter => {
      var style = [styles.button];
      if (activeFilter === filter.name) {
        style.push(styles.current);
      }
      return (
        <TouchableOpacity
          style={style}
          onPress={filter.action}>
          <Text style={styles.text}>{capitalize(filter.name)}</Text>
        </TouchableOpacity>
      )
    });
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#81c04d',
    flexDirection: 'row'
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  text: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  current: {
    backgroundColor: '#70a743'
  }
})

export default Filters;
