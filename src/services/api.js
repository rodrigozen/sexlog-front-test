import data from 'json-loader!../../server/data.json';

// Mocks the server request using the data.json file
export const getServerData = function getServerData() {
    return new Promise((resolve) => {
        resolve(data);
    });
};

export default {
    getServerData,
};
