/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T10:52:58+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: response.js
 * @Last modified by:   ido
 * @Last modified time: 2017-07-11T11:10:44+07:00
 */

function withJson(res, data) {
 res.setHeader('Content-Type', 'application/json')
 res.send(data)
}

module.exports = {
  'json': withJson
}
