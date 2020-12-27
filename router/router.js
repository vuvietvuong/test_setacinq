const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = (app) => {

    const Api = require("../controller/api")

    app.post('/api/auth/signup', [verifySignUp.checkPassword], Api.SignUp);

    app.post('/api/auth/login', Api.Login);

    app.get('/api/allbook',[authJwt.verifyToken], Api.GetAllBooks);

    app.get('/api/getbookbyid',[authJwt.verifyToken], Api.GetBookByID);

    app.post('/api/addbook',[authJwt.verifyToken], Api.AddBook);

    app.put('/api/updatebook',[authJwt.verifyToken], Api.UpdateBookByID);

}
