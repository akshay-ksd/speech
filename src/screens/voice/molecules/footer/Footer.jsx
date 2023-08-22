import {View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

const Voice = ({startRecognizing, started, stopRecognizing}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onLongPress={()=>startRecognizing()} onPressOut={()=>stopRecognizing()}>
        {started ? (
          <Text style={{fontSize:20,fontWeight:"bold",color:"purple"}}>Stop</Text>
        ) : (
          <Image
            style={styles.imageButton}
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Voice;
