export const increaseCount = () => ({
  type: 'INCREASE_COUNT',
});

const myFirstReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default myFirstReducer;
