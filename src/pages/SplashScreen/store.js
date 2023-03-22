import create from 'zustand';
import {routes_name} from 'rbase-routes';
export const useStore = create(set => ({
  loading: false,
}));
export const action = {
  initialize: navigation => {
    setTimeout(() => {
      navigation.replace(routes_name.LAYOUT);
    }, 2000);
  },
  cleanUp: () => {
    useStore.setState();
    useStore.destroy();
  },
};
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};
