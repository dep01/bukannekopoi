import create from 'zustand';
import Convert from 'rbase-model/newAnimeModel';
import * as animeProvider from 'rbase-providers/animeListProviders'
import { routes_name } from 'rbase-routes';
export function base_state(props) {
  return {
    loading: props?.loading ?? true,
    data:Convert.listOfnewAnimeModel(props?.data??[])
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize:async () => {
    setter.loading(true);
    await getData();
    setter.loading(false);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  getData,
  watchAnime
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  data: (value = []) => useStore.setState({data: Convert.listOfnewAnimeModel(value??[])}),
};
async function getData() {
  setter.loading(true);
  try {
    const response = await animeProvider.getNewAnime();
    if(response.success){
      setter.data(response.data);
      console.log(response.data)
    }
  } catch (error) {
    
  }
    setter.loading(false);
}
async function watchAnime(navigation,uri=""){
  const get_uri = await animeProvider.getUrlWatchAnime({uri:uri});
  navigation.navigate(routes_name.WATCH,{uri:get_uri.data.watch_url})
}