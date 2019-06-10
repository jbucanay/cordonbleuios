import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import RandComp from './RandComp';

export default class Game extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedNums: [0, 4]
  };

  static propTypes = {
    numCount: PropTypes.number.isRequired
  };
  isSelected = numIndex => {
    return this.state.selectedNums.indexOf(numIndex) >= 0;
  };

  randArra = Array.from({ length: this.props.numCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  target = this.randArra
    .slice(0, this.props.numCount - 2)
    .reduce((acc, i) => acc + i, 0);

  selectNumber = i => {
    this.setState(prevState => {
      return { selectedNums: [...prevState.selectedNums, i] };
    });
  };
  render() {
    return (
      <View style={styles.cont}>
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randCont}>
          {this.randArra.map((item, index) => (
            <RandComp
              key={index}
              id={index}
              number={item}
              isSelected={this.isSelected(index)}
              onPress={this.selectNumber}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-start'
  },
  target: {
    marginTop: 60,
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#aaa',
    padding: 4,
    width: 286
  },

  randCont: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});
