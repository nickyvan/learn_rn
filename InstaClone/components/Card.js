import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import AuthorRow from './AuthorRow';
export default class Card extends React.Component {
  state = { loading: true };
  handleLoad = () => {
    this.setState({ loading: false });
  };
  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow fullname={fullname} linkText={linkText} onPressLinkText={onPressLinkText} />
        <View style={styles.image}>
          {loading && <ActivityIndicator style={styles.absoluteFill} size={'large'} />}
          <Image style={styles.absoluteFill} source={image} onLoad={this.handleLoad} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  absoluteFill: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
});
