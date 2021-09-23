const router = require('express').Router
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets')
const restricted = require('../auth/auth-middleware')
const Classes = require('./classes-model')

module.exports = {
    router
}