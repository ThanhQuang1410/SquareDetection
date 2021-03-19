import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

export default class ViewResult extends React.PureComponent {
  constructor(props) {
    super(props);
    this.croppedImage = this.props.route.params.croppedImage;
    this.initialImage = this.props.route.params.initialImage;
    console.log(this.croppedImage);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexGrow: 2, ...styles.imageWrapper}}>
          <Text style={styles.textLabel}>This is your Rectangle</Text>
          <Image
            source={{uri: this.croppedImage}}
            resizeMode={'contain'}
            style={{...styles.image, height: 200}}
          />
        </View>
        <View style={{flexGrow: 1, ...styles.imageWrapper}}>
          <Text style={styles.textLabel}>This is your Default image</Text>
          <Image
            source={{uri: this.initialImage}}
            resizeMode={'contain'}
            style={{...styles.image, height: 300}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  textLabel: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
});
