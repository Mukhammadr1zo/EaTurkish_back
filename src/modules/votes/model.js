const { fetchData } = require('../../utils/postgres.js')

const voteModel = async ({stars}, {food_id}) => {
    try {
        const voteQuery = `
        update foods set food_stars = (food_stars + $1), count_of_vote = (count_of_vote + 1) where food_id = $2 returning *
        `
        return await fetchData(voteQuery, stars, food_id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    voteModel
}