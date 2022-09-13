const { fetchData } = require('../../utils/postgres.js')

const getNewsModel = async ({limit, page}) => {
    try {
        const getNewsQuery = `
        select * from news ${limit ? 'limit $1 offset (($2 - 1) * $1)' : ''};
        `
        return await fetchData(getNewsQuery, limit, page)
    } catch (error) {
        console.log(error);
    }
}

const getNewsByIdModel = async ({news_id}) => {
    try {
        const getNewsQuery = `
        select * from news where news_id = $1;
        `
        return await fetchData(getNewsQuery, news_id)
    } catch (error) {
        console.log(error);
    }
}

const postNewsModel = async ({ news_img, news_title, news_desc }) => {
    try {
        const postNewsQuery = `
        insert into news (news_img, news_title, news_desc) values ($1, $2, $3) returning *
        `
        return await fetchData(postNewsQuery, news_img, news_title, news_desc)
    } catch (error) {
        console.log(error);
    }
}

const putNewsModel = async (body, { news_id }) => {
    try {
        const getNewsQuery = `select * from news where news_id = $1`
        const [oldNews] = await fetchData(getNewsQuery, news_id)

        if (!oldNews) return []

        const { news_img, news_title, news_desc } = { ...oldNews, ...body }

        const putNewsQuery = `
        update news set news_img = $1, news_title = $2, news_desc = $3 where news_id = $4 returning *
        `
        return await fetchData(putNewsQuery, news_img, news_title, news_desc, news_id)
    } catch (error) {
        console.log(error);
    }
}

const deleteNewsModel = async ({ news_id }) => {
    try {
        const deleteNewsQuery = `
        delete from news where news_id = $1 returning *
        `
        return await fetchData(deleteNewsQuery, news_id)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getNewsModel,
    getNewsByIdModel,
    postNewsModel,
    putNewsModel,
    deleteNewsModel
}