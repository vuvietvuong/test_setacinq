module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		id:  { 
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
	    username: {
		  	type: Sequelize.STRING
	  	},
	  	password: {
		  	type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.TEXT, 
        },
        last_name: {
            type: Sequelize.TEXT,
        }
	});
	
	return User;
}