import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,Pressable} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {GlobalHeader} from 'rbase-components/molecules';
import {BackButton, LoadingIndicator} from 'rbase-components/atoms';
import {heightPercentageToDP} from 'rbase-helpers/responsive';
import {action, setter, useStore, base_state} from './store';
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
      <GlobalHeader left={<BackButton />} title={state.search} />
      {state.loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView>
          {state.data.map(val => {
            return (
              <Pressable
                key={val.watch_url}
                style={styles.containerList}
                onPress={() => action.episodeList(navigation, val.watch_url)}>
                <View style={{borderRadius: 10, height: '90%', width: '30%'}}>
                  <Image
                    style={{flex: 1}}
                    source={{uri: val.image_url}}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    width: '70%',
                    height: '100%',
                    justifyContent: 'center',
                    padding:8
                  }}>
                  <Text>{val.title}</Text>
                  <Text numberOfLines={5} ellipsizeMode="tail" >{val.desc}</Text>
                  <View
                    style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap',marginTop:10}}>
                    {val.genre.map(val => {
                      return (
                        <Text
                          style={{
                            borderRadius: 5,
                            backgroundColor:sys_colors.button.primary,
                            color:sys_colors.text.white,
                            textAlign:"center",
                            marginRight:5,
                            marginTop:5,
                            textAlignVertical:"center",
                            padding:5
                          }}>
                          {val}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },

  containerList: {
    height: heightPercentageToDP(35),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: sys_colors.text.white,
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
});
