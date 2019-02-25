export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updatePosition = (id, position) => ({
  type: UPDATE_POSITION,
  id,
  position,
});

export const ADD_CARD = 'ADD_CARD';

export const addCard = (card) => ({
  type: ADD_CARD,
  card,
});
