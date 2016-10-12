import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  renderLibraries(libraries) {
    return libraries.map( (library) => {
      return (
        <View key={library.id}>
          <Text>
            {library.title}
          </Text>
        </View>
      )
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          LibraryList
        </Text>
        {this.renderLibraries(this.props.libraries)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = state => {
  return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);
