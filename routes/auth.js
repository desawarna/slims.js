/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-28T11:49:26+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: auth.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-28T14:38:00+07:00
 */



module.exports = function (app, passport) {
  app.post('/signin', passport.authenticate('local-login',
    {
      successRedirect: '/admin',
      failureRedirect: '/signin',
      failureFlash: true
    }
  ))

  app.get('/signup', function (req, res, next) {
    app.render('opac/signup')
  })
}
