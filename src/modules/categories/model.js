const { fetchData } = require('../../utils/postgres.js')

const getCategoriesModel = async () => {
    try {
        const getCategoriesQuery = `
        select * from categories
        `
        return await fetchData(getCategoriesQuery)
    } catch (error) {
        console.log(error);
    }
}

const postCategoryModel = async ({category_name}) => {
    try {
        const postCategoryQuery = `
        insert into categories(category_name) values ($1) returning *
        `
        return await fetchData(postCategoryQuery, category_name)
    } catch (error) {
        console.log(error);
    }
}

const deleteCategoryModel = async ({category_id}) => {
    try {
        const deleteCategoryQuery = `
        delete from categories where category_id = $1 returning *
        `
        return await fetchData(deleteCategoryQuery, category_id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoriesModel,
    postCategoryModel,
    deleteCategoryModel
}