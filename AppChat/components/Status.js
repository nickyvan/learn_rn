import { getStatusBarHeight } from 'react-native-status-bar-height';
import { NetInfo, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default class Status extends React.Component {
  state = {
    isConnected: null
  };

  render() {
    const { isConnected } = this.state;
    const backgroundColor = isConnected ? 'white' : 'red';
    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? 'dark-content' : 'light-content'}
        animated={false}
      />
    );
    if (Platform.OS === 'ios') {
      return <View style={[styles.status, { backgroundColor }]}>{messageContainer}</View>;
    }
    return null; 
  }
}

const statusHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0;
const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
});
