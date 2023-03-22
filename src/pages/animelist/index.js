import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable
} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'rbase-helpers/responsive';
import {
  BackButton,
  CustomInput,
  LoadingIndicator,
} from 'rbase-components/atoms';
import {action, setter, useStore, base_state} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
export default ({navigation}) => {
  const state = {
    ...useStore(state => base_state(state), shallow),
  };

  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="ANIME LIST" />
      <View style={{width: '100%', padding: 8}}>
        <CustomInput
          value={state.search}
          placeholder="search anime..."
          onChangeText={val => setter.search(val)}
          containerStyle={{height: heightPercentageToDP(8), width: '100%'}}
          right={
            <BackButton
              onPress={() => action.search(navigation)}
              iconName="magnify"
              style={{justifyContent: 'center', alignItems: 'center'}}
              color={sys_colors.button.primary}
            />
          }
        />
      </View>
      {/* {state.loading ? null : (
        <ScrollView
          style={{
            height: heightPercentageToDP(10),
            width: '100%',
            margin: 8,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {state.filter_list.list_letter.map(val => {
            return (
              <Pressable
                key={val}
                onPress={() => action.filterData(val)}
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    state.filter_str == val
                      ? sys_colors.button.primary
                      : sys_colors.text.white,
                  borderWidth: 0.3,
                  borderColor: sys_colors.line.secondary,
                  borderRadius: 10,
                  height: heightPercentageToDP(6),
                  width: 30,
                }}>
                <Text
                  style={{
                    color:
                      state.filter_str == val
                        ? sys_colors.text.white
                        : sys_colors.text.black,
                  }}>
                  {val}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )} */}
      {state.loading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView
          style={{...sys_styles.scroll_container,backgroundColor:sys_colors.text.white}}
          showsVerticalScrollIndicator={false}>
          {state.filter_list.data.map(val => {
            return (
              <View key={val.letter} style={{width: '100%', marginBottom: 10}}>
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
                  {val.letter}
                </Text>
                {val.list_anime.map(value => {
                  return (
                    <Pressable
                      key={value.watch_url}
                      onPress={()=>action.episodeList(navigation,value.watch_url)}
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
                        {value.title}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
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
});
