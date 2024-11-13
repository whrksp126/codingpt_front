// src/store/reducers.js
import { combineReducers } from 'redux';

// 초기 상태와 리듀서 함수 정의
const initialState = {
  sampleData: 'Hello Redux!',
};

function sampleReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// 리듀서를 결합하여 rootReducer 생성
const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
