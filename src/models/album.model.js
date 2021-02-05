const getAlbumsModel = 
`SELECT * FROM album WHERE fk_album_artist = ?`

module.exports = { 
  getAlbumsModel
}