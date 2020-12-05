const INITIAL_STATE = {
  videos: [],
  carregando: false,
  erro: false,
};

export default function busca(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BUSCA_VIDEO_REQUEST":
      console.log("BUSCANDO VIDEO");
      return {
        carregando: true,
        videos: [],
        erro: false,
      };

    case "BUSCA_VIDEO_SUCCESS":
      console.log("VIDEO SUCCESS");
      return {
        carregando: false,
        videos: action.videos,
        erro: false,
      };

    case "BUSCA_VIDEO_ERROR":
      console.log("VIDEO ERROR");
      return {
        carregando: false,
        videos: [],
        erro: true,
      };

    default:
      return state;
  }
}
