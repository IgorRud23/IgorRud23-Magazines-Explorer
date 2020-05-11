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

export const createMag = (magazine) => {
  return (dispatch) => {
    const options = {
    method: 'POST',
    body: JSON.stringify(magazine),
    credentials: 'omit',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };

  fetch('http://localhost:3000/api/magazines/create', options)
    .then(res => res.json())
    .then(response => {
       if (response.code === 400 || response.status === 'error'){
        alert('Add info to the fields');
        return;
       }
      dispatch(addItemToList(response));
      alert('Successfully created!');
    }).catch(console.error);
  };
};

export const deleteItemFromList = (itemId) => {
  return ({
    type: 'DELETE_FROM_LIST',
    payload: itemId,
  });
};
