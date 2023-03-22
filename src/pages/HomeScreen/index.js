import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import shallow from 'zustand/shallow';
import {sys_colors, sys_styles, sys_text_styles} from 'rbase-helpers/constants';
import {action, setter, useStore, base_state} from './store';
import {GlobalHeader} from 'rbase-components/molecules';
import {LoadingIndicator} from 'rbase-components/atoms';
import {heightPercentageToDP} from 'rbase-helpers/responsive';
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
      <GlobalHeader title="NEW RELEASE" />
      {state.loading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          style={sys_styles.scroll_container}
          keyExtractor={item => item.watch_url}
          data={state.data}
          onRefresh={()=>action.getData()}
          refreshing={state.loading}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.containerList}
                onPress={() => action.watchAnime(navigation, item.watch_url)}>
                  <View
                  
                  style={{borderRadius: 10, height: '90%', width: '30%'}}
                  >
                  <Image
                  style={{flex:1}}
                    source={{uri: item.image_url}}
                    resizeMode="contain"
                  />

                  </View>
                <View style={{width:"70%",height:"100%",justifyContent:"center" }}>
                    <Text>{item.title}</Text>
                    <Text>Episode {item.episode}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
  containerList: {
    height: heightPercentageToDP(20),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:sys_colors.text.white,
    borderRadius:10,
    padding:8,
    marginBottom:10
  },
});
