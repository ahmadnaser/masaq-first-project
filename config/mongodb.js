const mongodb = require('mongodb')
const config = require('./index')




module.exports = async(app) => {

    //1-client
    const MongoClient = mongodb.MongoClient

    const filter = {};

    const client = await MongoClient.connect(
        'mongodb://127.0.0.1:27017'
    );

    console.log('db connected');
    const students = client.db('studentsdb').collection('students');


    students.insertOne({
        "dob": "4-4-2004",
        "grade": 85.6,
        "name": "Ahmad",
        "speciality": "IT",
    }, (err, data) => {
        students.find({}).toArray((err, data) => {
            console.log(data)
        })
    })




}