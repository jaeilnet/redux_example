// 액션타입 정의
const ADD_COUNTER = "ADD_COUNTER";

// 액션함수
const addCounter = (number) => ({
  type: "ADD_COUNTER",
  payload: number,
});

// 초기 값 설정
const initialState = {
  counter: 0,
};

// 상태변경 로직
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    //   액션타입
    case ADD_COUNTER:
      //  어떤 상태 값 변경을 줄지 로직을 구현
      return {
        counter: action.payload,
      };
    default:
      return state;
  }
};

export { addCounter };
