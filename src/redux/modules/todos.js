const initialState = {
   items: [],
};

const ADD_ITEM = 'my-app/todos/ADD_ITEM';

export const addItem = toDo => ({ type: ADD_ITEM, payload: toDo});

const reducer = (state=initialState, action) => {
   switch (action.type) {
       case ADD_ITEM:
          return {
            items: [...state.items, action.payload],
          };
       default:
          return state;
   }
}

export default reducer;