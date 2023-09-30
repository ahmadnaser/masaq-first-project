const Pet = require('../models/Pet')

//crud


//create
async function create(data) {

    //let pet = new Pet({name:data.name,description:data.description})
    let pet = new Pet(data)
    return await pet.save().then(result => {
        console.log('pet is saved!')
    })
}
//read
async function getAll() {

    return await Pet.find({}).lean()
}
//update

//delete

module.exports = {
    getAll,
    create
}