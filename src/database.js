const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mern-tasks')
    .then(db =>console.log('DB is connected'))
    .catch(err=>console.error(err));

    module.exports = mongoose;