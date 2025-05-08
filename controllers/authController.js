const User = require('../models/userModel');
const Bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const {username, password, email} = req.body;
    if (!username || !password || !email) { return res.status(400).json({message: 'Alle felt må fylles ut'}); }
}
exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    if (!password || !email) { return res.status(400).json({message: 'Alle felt må fylles ut'}); }
}
exports.logoutUser = async (req, res) => {

}

exports.getRegisterUser = async (req, res) => {
    res.render("register")
}
exports.getLoginUser = async (req, res) => {
    res.render("login")
}