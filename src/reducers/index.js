import uuidv4 from 'uuid/v4';
import { UPDATE_POSITION, ADD_CARD } from 'actions/cards';

const initalState = {
  items: [
    {
      id: '1',
      x: 200,
      y: 200,
      width: 100,
      height: 100,
      content: 'box1',
    },
    {
      id: '2',
      x: -100,
      y: -400,
      width: 100,
      height: 100,
      content: 'box2',
    },
    {
      id: '3',
      x: 0,
      y: 20,
      width: 100,
      height: 20,
      content: 'box3',
    },
  ],
};

const cards = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_POSITION:
      return Object.assign({}, state, {
        items: state.items.map(i => {
          if (i.id === action.id) {
            return { ...i, ...action.position };
          }
          return i;
        }),
      });
    case ADD_CARD:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            id: uuidv4(),
            x: 0,
            y: 0,
            ...action.card,
          },
        ],
      });
    default:
      return state;
  }
};

export default cards;
