export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updatePosition = (id, card) => ({
  type: UPDATE_POSITION,
  id,
  card,
});

export const ADD_CARD = 'ADD_CARD';

export const addCard = (card) => ({
  type: ADD_CARD,
  card,
});
