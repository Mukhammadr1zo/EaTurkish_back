const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { firebaseConfig } = require('./config.js')

const app = initializeApp(firebaseConfig);
const fireBaseStorage = getStorage(app)

const uploadimg = async (file, path, res) => {
    const storageRef = ref(fireBaseStorage, path);

    await uploadBytes(storageRef, file.data)
        .then(() => {
            console.log('Img uploaded successfully');
        }).catch(error => res.send({
            status: 203,
            message: error.message || error
        }))

    return await getDownloadURL(storageRef) || ''
}

module.exports = {
    uploadimg
}