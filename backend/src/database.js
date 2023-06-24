const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI );
const URI = process.env.MONGODB_URI  ? process.env.MONGODB_URI : 'mongodb+srv://NoteApp:NoteApp@noteapp.frtlx.mongodb.net/NoteApp?retryWrites=true&w=majority';


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: true

});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('DB is connected');

});



//mongodb+srv://NoteApp:NoteApp@noteapp.frtlx.mongodb.net/NoteApp?retryWrites=true&w=majority