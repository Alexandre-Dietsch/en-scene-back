const artistsByCategoryModel = 
` SELECT * FROM user WHERE fk_user_role=2 AND fk_user_thematic = ?`

module.exports = {
  artistsByCategoryModel
}