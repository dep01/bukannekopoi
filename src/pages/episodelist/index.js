import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,Pressable} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {action, setter, useStore, base_state} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
import {BackButton, LoadingIndicator} from 'rbase-components/atoms';
import {heightPercentageToDP} from 'rbase-helpers/responsive';
export default ({navigation, route}) => {
  const state = {
    ...useStore(state => base_state(state), shallow),
  };

  useEffect(() => {
    action.initialize(route);
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader
        left={<BackButton style={{flex: 1}} />}
        title="EPISODE LIST"
      />
      {state.loading ? (
        <LoadingIndicator />
      ) : (
        <View
          style={{
            ...sys_styles.container,
            backgroundColor: sys_colors.text.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: heightPercentageToDP(30),
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '100%',
                width: '30%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: '100%', height: '90%'}}
                resizeMode="contain"
                source={{uri: state.data.image_url}}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 8,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flex: 1,
              }}>
              <Text>
                Sinopsis:{'\n'}
                {state.data.desc}
              </Text>
            </View>
          </View>
          
          <Text
              style={{
                width: '100%',
                backgroundColor: sys_colors.secondary,
                color: sys_colors.text.white,
                fontSize: 18,
                marginBottom: 10,
                paddingLeft: 10,
                height: heightPercentageToDP(6),
                textAlignVertical: 'center',
              }}>
              EPISODE
            </Text>
          <ScrollView
            style={{flex:1,width:"100%",marginTop:10}}
            showsVerticalScrollIndicator={false}>
            {state.data.episode_list.map(val=>{
              return(
                <Pressable
                      key={val.watch_url}
                      onPress={()=>action.watchAnime(navigation,val.watch_url)}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: sys_colors.text.white,
                      }}>
                      <Text
                        style={{
                          width: '100%',
                          borderBottomColor: sys_colors.line.secondary,
                          borderBottomWidth: 0.5,
                          height: heightPercentageToDP(6),
                          marginBottom: 5,
                          textAlignVertical: 'center',
                        }}>
                        {val.episode}
                      </Text>
                    </Pressable>
              )
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
});
