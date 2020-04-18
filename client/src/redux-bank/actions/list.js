export const getListOfMagazines = () => {
  return ({
    type: 'GET_LIST',
    payload: fetch('http://localhost:3000/api/magazines/list').then(res => res.json()),
  });
};

export const addItemToList = (newMagazine) => {
  return({
    type: 'ADD_TO_LIST',
    payload: newMagazine,
  });
};

export const deleteItemFromList = (itemId) => {
  return ({
    type: 'DELETE_FROM_LIST',
    payload: itemId,
  });
};
