const db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = db.user;
const Book = db.book;
// SignUp
exports.SignUp = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (user) {
            return res.status(401).send({success: false, message: "Username is exists!"})
        }
        else{
            let us = await User.create({
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 8),
                first_name: req.body.first_name,
                last_name: req.body.last_name
            })
            if(us){
                return res.status(200).send({success: true})
            }
        }
        
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}

exports.Login = async (req, res) => {
	try {
        let signin = await User.findOne({
            where:{
                username : req.body.username
            }  
        })
        if (!signin) {
			return res.status(401).send({success: false, message:"Username isn't exists"});
		}
        let passwordIsValid = bcrypt.compareSync(req.body.password, signin.password);
        
        if (!passwordIsValid) {
          return res.status(400).send({ success: false, error: "Password incorrect!" });
        }
        console.log(signin.id)
        let token = jwt.sign({ id: signin.id},'secret',
          {
            expiresIn: 86400,
          }
        )
        
        res.status(200).send({ success: true,  token: token},)
		
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}

exports.GetAllBooks = async (req, res) => {
	try {
        let allbook = await Book.findAll({
        })
        if(allbook){
            return res.status(200).send({success: true, allbook: allbook})
        }
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}

exports.GetBookByID = async (req, res) => {
	try {
        let bookbyid = await Book.findOne({
            where:{
                id: req.query.id
            }
        })
        if(!bookbyid){
            return res.status(401).send({success: false, message: "Book is exists!"})
        }
        else {
            return res.status(200).send({success: true, book: bookbyid})
        }
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}

exports.AddBook = async (req, res) => {
	try {
        let book = await Book.findOne({
            where:{
                name: req.body.name
            }
        })
        if (book) {
            return res.status(401).send({success: false, message: "Book is exists!"})
        }
        else{
            let createbook = await Book.create({
                name: req.body.name,
                publisher: req.body.publisher,
                description: req.body.description
            })
            if(createbook){
                return res.status(200).send({success: true})
            }
        }
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}

exports.UpdateBookByID = async (req, res) => {
	try {
        let updatebookbyid = await Book.findOne({
            where:{
                id: req.body.id
            }
        })
        if(!updatebookbyid){
            return res.status(401).send({success: false, message: "Book is exists!"})
        }
        else {
            let update = await Book.update({
                name: req.body.name,
                publisher: req.body.publisher,
                description: req.body.description
            },
            {
                where:{id :req.body.id}
            })
            if(update){
                return res.status(200).send({success: true})
            }
        }
    } catch( error ) {
        res.status(500).send({success: true, message: error.message})
    }
}
