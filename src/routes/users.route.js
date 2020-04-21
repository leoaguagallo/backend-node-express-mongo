const { Router } = require('express')

const router = Router();

/*
* model import
*/
const User = require('../models/user')


/*
* create users
*/
router.post('/users', async (req, res) => {
    console.log(req.body) //recepcion de database

    const { name, email, password } = req.body
    const new_user = new User({ name, email, password })

    try {
        const save_user = await new_user.save() //save on db
        res.json(save_user)
    } catch (e) {
        res.json({ message: "Error saving data" })
    }
})

/*
* Get All users
*/
router.get('/users', async (req, res) => {
    try {
        const all_users = await User.find()
        res.json(all_users)
    } catch (e) {
        res.json({ message: "Error saving data" })
    }
})

/*
* get user
*/
router.get('/users/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (e) {
        res.json({ message: "Error saving data" })
    }
})

/*
* Delete user
*/
router.delete('/users/:id', async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ message: `User ${req.params.id} deleted successfully` })
    } catch (e) {
        res.json({ message: "Error saving data" })
    }
})


/*
* Update user
*/
router.put('/users/:id', async (req, res) => {

    const { name, email, password } = req.body
    await User.updateOne(
        { _id: req.params.id }, 
        { $set: {name, email, password} }
    )
    res.json({ message: `User ${req.params.id} updated successfully` })


})

module.exports = router