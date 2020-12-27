module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('books', {
        id:  { 
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            primaryKey: true
        },
        name: { 
            type: Sequelize.TEXT 
        },
        publisher: Sequelize.TEXT ,
        description: Sequelize.TEXT ,
    });

    return Book;
}