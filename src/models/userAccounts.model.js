const userAccountsModel = `SELECT * FROM user`;

const createUserAccountModel = 
`INSERT INTO user (fk_user_role, pseudo, email, password)
VALUES (?, ?, ?, ?)`;

module.exports = {
  userAccountsModel,
  createUserAccountModel
}