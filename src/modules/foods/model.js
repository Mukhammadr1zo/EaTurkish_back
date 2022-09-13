const { fetchData } = require('../../utils/postgres.js')

const getFoodsModel = async ({category_id}) => {
    try {
        const getFoodsQuery = `
        select
            food_id, 
            food_img,
            food_name,
            food_price,
            food_category,
            round((food_stars / nullif(count_of_vote, 0)), 1) as food_stars
        from foods
        where ${category_id ? 'food_category = $1' : true}
        `
        return await fetchData(getFoodsQuery, category_id)
    } catch (error) {
        console.log(error);
    }
}

const getFoodByIdModel = async ({food_id}) => {
    try {
        const getFoodsQuery = `
        select
            food_id, 
            food_img,
            food_name,
            food_price,
            food_category,
            round((food_stars / nullif(count_of_vote, 0)), 1) as food_stars
        from foods
        where food_id = $1
        `
        return await fetchData(getFoodsQuery, food_id)
    } catch (error) {
        console.log(error);
    }
}

const getPopularFoodsModel = async () => {
    try {
        const getPopularFoodsQuery = `
        select 
            food_id, 
            food_img,
            food_name,
            food_price,
            food_category,
            round((food_stars / nullif(count_of_vote, 0)), 1) as food_stars
        from foods 
        where round((food_stars / nullif(count_of_vote, 0)), 1) >= 3 order by food_stars desc
        `
        return await fetchData(getPopularFoodsQuery)
    } catch (error) {
        console.log(error);
    }
}

const postFoodModel = async ({food_img, food_name, food_price, food_category}) => {
    try {
        const postFoodQuery = `
        insert into foods (food_img, food_name, food_price, food_category) values ($1, $2, $3, $4) returning *
        `
        return await fetchData(postFoodQuery, food_img, food_name, food_price, food_category)
    } catch (error) {
        console.log(error);
    }
}

const putFoodModel = async (body, { food_id }) => {
    try {
        const getFoodQuery = `select * from foods where food_id = $1`
        const [oldFood] = await fetchData(getFoodQuery, food_id)

        if (!oldFood) return []

        const { food_img, food_name, food_price, food_category } = { ...oldFood, ...body }

        const putFoodQuery = `
        update foods set food_img = $1, food_name = $2, food_price = $3, food_category = $4 where food_id = $5 returning *
        `
        return await fetchData(putFoodQuery, food_img, food_name, food_price, food_category, food_id)
    } catch (error) {
        console.log(error);
    }
}

const deleteFoodsModel = async ({ food_id }) => {
    try {
        const deleteFoodsQuery = `
        delete from foods where food_id = $1 returning *
        `
        return await fetchData(deleteFoodsQuery, food_id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFoodsModel,
    getFoodByIdModel,
    getPopularFoodsModel,
    postFoodModel,
    putFoodModel,
    deleteFoodsModel
}