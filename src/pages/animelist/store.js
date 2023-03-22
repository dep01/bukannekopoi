import create from 'zustand';
import Convert from 'rbase-model/animeListAlphaModel';
import * as animeProvider from 'rbase-providers/animeListProviders';
import {routes_name} from 'rbase-routes';
export function base_state(props) {
  return {
    loading: props?.loading ?? true,
    data: Convert.objectOfanimeListAlphaModel(props?.data ?? null),
    search: props?.search ?? '',
    filter_str: props?.filter_str ?? '',
    list_letter: props?.list_letter ?? [],
    filter_list: Convert.objectOfanimeListAlphaModel(
      props?.filter_list ?? null,
    ),
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: async () => {
    setter.loading(true);
    await getData();
    setter.loading(false);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  search,
  filterData,
  episodeList
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  search: (value = '') => useStore.setState({search: value}),
  filter_str: (value = '') => useStore.setState({filter_str: value}),
  data: (value = null) =>
    useStore.setState({data: Convert.objectOfanimeListAlphaModel(value)}),
  filter_list: (value = null) =>
    useStore.setState({
      filter_list: Convert.objectOfanimeListAlphaModel(value),
    }),
};

async function getData() {
  setter.loading(true);
  try {
    const response = await animeProvider.getAnimeListAlpha();
    if (response.success) {
      setter.data(response.data);
      setter.filter_list(response.data);
      // console.log(response.data);
    }
  } catch (error) {}
  setter.loading(false);
}

async function filterData(filter="") {
  setter.loading(true);
  setter.filter_str(filter);
  const cur_state = base_state(useStore.getState());
  console.log(filter);
  if(filter==""){
    setter.filter_list(cur_state.data);
  }else{
    let obj = cur_state.data.data.find(o=>o.letter==filter);
    // let x =[];
    // console.log(obj);
    // x.push(obj);
    // cur_state.filter_list.data[0].
    setter.filter_list({
      list_letter:cur_state.data.list_letter,
      data:obj
    })
  }
  setTimeout(() => { 
    setter.loading(false);
   }, 2000)
}
function search(navigation) {
  const cur_state = base_state(useStore.getState());
  console.log(cur_state.search)
  navigation.navigate(routes_name.SEARCH, {search: cur_state.search});
}
function episodeList(navigation,uri){
  navigation.navigate(routes_name.EPISODE_LIST,{uri:uri})
}