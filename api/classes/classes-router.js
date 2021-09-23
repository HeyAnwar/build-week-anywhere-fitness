const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')
const restricted = require('../auth/auth-middleware')
const Classes = require('./classes-model')

router.get('/', async (req, res, next) => {
    try {
        const classes = await Classes.getAll()
        res.status(200).json(classes)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router