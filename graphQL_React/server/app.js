const express = require ('express');
const app = express();
const graphqlHTTP = require ('express-graphql');
const schema = require ('./schema/schema');
const mongoose = require ('mongoose');
const cors = require('cors');

//allow cross-origin requests
app.use(cors());
mongoose.connect('mongodb+srv://user:123@gql-books-b5obm.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=>{
console.log('connected to the database')
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, ()=>{
    console.log('Listen for requests on port 4000');
})