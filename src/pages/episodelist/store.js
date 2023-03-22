import create from 'zustand';
import * as animeProvider from 'rbase-providers/animeListProviders';
import Convert from 'rbase-model/episodeListModel';
import {routes_name} from 'rbase-routes';
export function base_state(props) {
  return {
    loading: props?.loading ?? true,
    data: Convert.objectOfepisodeListModel(props?.data ?? null),
  };
}
export const useStore = create(set => base_state());
export const action = {
  initialize: async route => {
    setter.loading(true);

    await getData(route.params.uri);
    setter.loading(false);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
  watchAnime,
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
  data: (value = false) => useStore.setState({data: value}),
};
async function getData(uri) {
  setter.loading(true);

  try {
    const response = await animeProvider.getEpisodeList({uri: uri});
    if (response.success) {
      let data = Convert.objectOfepisodeListModel(response.data);
      const last_data = data.episode_list[data.episode_list.length - 1];
      let array_episode = last_data.episode.replace('Episode ', '');
      const array_url = last_data.watch_url.split('-');
      array_url.pop();
      let str_url = array_url.join('-');
      // console.log(str_url);
      let data_to_push = [];
      for (let index = parseInt(array_episode)-1; index >= 1; index--) {
        let push_data = {
          date: '',
          episode: `Episode ${index}`,
          watch_url: `${str_url}-${index}/`,
        };
        data.episode_list.push(push_data);
        data_to_push.push(push_data)
      }
      // console.log(data_to_push);

      setter.data(data);
    }
  } catch (error) {}
  setter.loading(false);
}

async function watchAnime(navigation, uri = '') {
  setter.loading(true);
  const get_uri = await animeProvider.getUrlWatchAnime({uri: uri});
  setter.loading(false);
  navigation.navigate(routes_name.WATCH, {uri: get_uri.data.watch_url});
}
