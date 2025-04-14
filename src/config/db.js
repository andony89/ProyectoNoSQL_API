const mongoose = require('mongoose');



const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ProyectoNoSQLCasaBici',{

        });
        console.log('MongoDB connected');

    }catch (err){
        console.error(err.message);
        process.exit(1);
    }

};

module.exports = conectDB;