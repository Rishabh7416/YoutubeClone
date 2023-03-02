const initialState = {
  info: {},
  duration: '',
  videoData: []
};

export const informationReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'INFO':
      return {...state, payload};
    case 'DURATION':
      return {...state, payload};
    case 'DATA':
      return {...state, payload};
    default:
      return {...state};
  }
};