// const express = require('express')
// const app = express()
// const PORT = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World ddddd1111ddd')
// })

// app.listen(PORT, () => {
//     console.log(`App is listening at http://localhost:${PORT}`)
// })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://daisyhhuang:318318China@cluster0.sledhxp.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(url);

// try {
//     client.connect()
// } catch(e) {
//     console.error(e)
// } 

// MongoClient.connect(url, function(err, db) {
//   console.log(111)
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'runoob';

// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     return;
//   }

//   console.log('Connected to MongoDB successfully');

//   const db = client.db(dbName);

//   // 在这里执行数据库操作

//   client.close();
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/runoob";

// console.log(111)
// MongoClient.connect(url).then(client => {
//     console.log('Connected to MongoDB successfully');
// })
// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';

// MongoClient.connect(url)
//   .then(client => {
//     console.log('Connected to MongoDB successfully');

//     const db = client.db(dbName);

//     // 在这里执行数据库操作

//     client.close();
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB:', err);
//   });

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const { response } = require('express');

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
// const multer = require('multer');
const port = 3000;

const app = express();
app.use(cors());
var database;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    MongoClient.connect(url).then(client => {
        database = client.db(dbName);

        console.log('Connected to MongoDB successfully')
    })
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/getdata', (request, response) => {
    database.collection('customers').find({}).toArray().then(result => {
        console.log(result)
        response.send(result)
    })
});







// MongoClient.connect(url, { useNewUrlParser: true })
//   .then(client => {
//     console.log('Connected to MongoDB successfully');

//     const db = client.db(dbName);
    
//     const collection = db.collection('users');

//     const user = { name: 'John', age: 25, email: 'john@example.com' };
    
//     // collection.insertOne(user).then(() => {
//     //     console.log('Data inserted successfully')
//     // })

//     collection.find({}).toArray().then((result) => {
//         console.log(result)

//     })

//     // 在这里执行数据库操作

//     // client.close();
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB:', err);
//   });