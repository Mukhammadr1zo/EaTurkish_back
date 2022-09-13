const { fetchData } = require('../../utils/postgres.js')

const getMessagesModel = async ({limit, page}) => {
    try {
        const getNewsQuery = `
        select * from messages ${limit ? 'limit $1 offset (($2 - 1) * $1)' : ''};
        `
        return await fetchData(getNewsQuery, limit, page)
    } catch (error) {
        console.log(error);
    }
}

const getMessagesByIdModel = async ({message_id}) => {
    try {
        const getNewsQuery = `
        select * from messages where message_id = $1;
        `
        return await fetchData(getNewsQuery, message_id)
    } catch (error) {
        console.log(error);
    }
}

const postMessageModel = async ({ client_name, client_phone, client_email, message_body }) => {
    try {
        const postMessagesQuery = `
        insert into messages (client_name, client_phone, client_email, message_body) values ($1, $2, $3, $4) returning *
        `
        return await fetchData(postMessagesQuery, client_name, client_phone, client_email, message_body)
    } catch (error) {
        console.log(error);
    }
}

const deleteMessageModel = async ({ message_id }) => {
    try {
        const deleteMessagesQuery = `
        delete from messages where message_id = $1 returning *
        `
        return await fetchData(deleteMessagesQuery, message_id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMessagesModel,
    getMessagesByIdModel,
    postMessageModel,
    deleteMessageModel
}