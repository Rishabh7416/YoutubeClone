const initialState = {info: {}};

export const informationReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'INFO':
      return {...state, payload};
    default:
      return {...state};
  }
};
