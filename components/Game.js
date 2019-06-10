import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


export default class Game extends Component {
  constructor(props){

    super(props);
        
  }
    static propTypes = {
      numCount: PropTypes.number.isRequired
    }
    
    
      randArra = Array.from({length: this.props.numCount}).map(()=> 1+ Math.floor(10*Math.random()));
      target = this.randArra.slice(0, this.props.numCount -2).reduce((acc, i)=> acc+ i, 0)
      render() {
        return (
          <View style={styles.cont}>
            <Text style={styles.target}>{this.target}</Text>
            {this.randArra.map((item, index)=> <Text key={index}>{item}</Text>)}
          </View>
        );
      }
    
}


const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  target: {
    marginTop: 60,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#aaa',
    padding: 4,
    width: 200
  }
    
});