const { fetchData } = require('../../utils/postgres.js')

const postSubscriberModel = async ({subscriber_email}) => {
    try {
        const postSubscriberQuery = `
        insert into subscribers(subscriber_email) values ($1) returning *
        `
        return await fetchData(postSubscriberQuery, subscriber_email)
    } catch (error) {
        console.log(error);
    }
}

const getSubscribersModel = async () => {
    try {
        const getSubscribersQuery = `
        select * from subscribers;
        `
        return await fetchData(getSubscribersQuery)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    postSubscriberModel,
    getSubscribersModel
}