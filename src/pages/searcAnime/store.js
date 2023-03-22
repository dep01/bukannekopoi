import create from 'zustand';
import * as animeProvider from 'rbase-providers/animeListProviders';
import Convert from 'rbase-model/searchAnimeModel';
import {routes_name} from 'rbase-routes'
export function base_state(props) {
  return {
    loading: props?.loading ?? false,
    search: props?.search ?? '',
    data: Convert.listOfsearchAnimeModel(props?.data??[]),
  };
}
export const useStore = create(set => base_state());
export const action = {

  initialize: async route => {

  setter.loading(true);
  setter.search(route.params.search);
  await getData(route.params.search);
  setter.loading(false);

  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  episodeList
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  search: (value = '') => useStore.setState({search: value}),
  data: (value = []) => useStore.setState({data: Convert.listOfsearchAnimeModel(value)}),
};

async function getData(val="") {
  setter.loading(true);
  try {
    const response = await animeProvider.searchAnime({search:val});
    if(response.success){
      setter.data(response.data);
    }
  } catch (error) {
    
  }
    setter.loading(false);
}

function episodeList(navigation,uri){
  navigation.navigate(routes_name.EPISODE_LIST,{uri:uri})
}