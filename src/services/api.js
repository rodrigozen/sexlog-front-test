import data from 'json-loader!../../server/data.json';

// Mocks the server request using the data.json file
export const getServerData = function getServerData() {
    return new Promise((resolve) => {
        resolve(data);
    });
};

export const postServerData = function postServerData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 300);
    });
};


export default {
    getServerData,
    postServerData,
};
