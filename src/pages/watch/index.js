import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import Orientation from 'react-native-orientation-locker';
import {action, setter, useStore, base_state} from './store';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('screen');
export default ({navigation, route}) => {
  const state = {
    ...useStore(state => base_state(state), shallow),
  };

  useEffect(() => {
    action.initialize(route);
    // Orientation.lockToLandscape();
    return () => {
      // Orientation.lockToPortrait();
      action.cleanUp();
    };
  }, [navigation, action]);
  return state.loading ? null : (
    // <View style={sys_styles.scaffold}>
    <WebView
      scalesPageToFit={true}
      bounces={false}
      javaScriptEnabled
      // style={{ height: 500, width: 300 }}
      style={{
        flex:1
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 0,
        // top: 0,
        // width: width,
        // height: height,
      }}
      source={{
        uri:state.uri
      }}
      allowsFullscreenVideo={true}
      automaticallyAdjustContentInsets={true}
    />
    // <Text>{state.uri}</Text>
    // <Video
    //   source={{uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}
    //   controls={true}
    //   ref={ref => {
    //     setter.player(ref);
    //   }}
    //   style={{
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     top: 0,
    //     width: width,
    //     height: height,
    //   }}
    // />
    // </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
});
