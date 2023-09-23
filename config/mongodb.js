const mongodb = require('mongodb')
const config = require('./index')




module.exports = async(app) => {

    //1-client
    const MongoClient = mongodb.MongoClient

    const filter = {};

    const client = await MongoClient.connect(
        'mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const students = client.db('studentsdb').collection('students');
    const cursor = students.find(filter);
    const result = await cursor.toArray();

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


    await client.close();


    /*
        //connect
    const client = new MongoClient(config.DB_CONNECTION)
    client.connect(function(err) {
        if (err) { throw new Error(err) }
        //continue
        const db = client.db('studentsdb')
        const students = db.collection('students')

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

    })
    */

}