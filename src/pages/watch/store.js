import create from 'zustand';
  export function base_state (props) {
      return {
        loading: props?.loading??true,
        uri: props?.uri??"",
        player: props?.player??null,
      }
  }
  export const useStore = create(set => (base_state()));
  export const action = {
    initialize: (route) => {
      setter.loading(true);
      console.log("KESINI BANGSAAATTTTT")
      console.log(route.params.uri)
      setter.uri(route.params.uri)
      setter.loading(false);
    },
    cleanUp: () => {
      useStore.setState();
      useStore.destroy();
    },
  };
  export const setter = {
    loading: (value = false) => useStore.setState({loading: value}),
    uri: (value = "") => useStore.setState({uri: value}),
    player: (value = null) => useStore.setState({player: value}),
  };
