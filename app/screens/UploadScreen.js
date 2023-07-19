import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import AnimatedLottieView from 'lottie-react-native';


function UploadScreen({ onDone, progress = 0, visible= false }) {
return (
  <Modal visible={visible}>
        <View style={styles.container}>
            { progress < 1 ?  (
                  <Progress.Bar
                  color={colors.primary}
                  width={200}
                  progress={progress} />) : (<AnimatedLottieView
                                              autoPlay
                                              loop={false}
                                              onAnimationFinish={onDone}
                                              source={require('../assets/animations/loader.json')}
                                              style={styles.animation}
                                              />) }
        </View>
  </Modal>
 );
}
const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  flex:1,
  justifyContent: 'center',
},
animation: {
  width:150,
},
})
export default UploadScreen;
