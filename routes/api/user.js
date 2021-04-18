const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('config');

router.post('/',
[
    check('username', 'Username is required').not().isEmpty(),
    check(
        'password',
        'Please enter a minimum 6 characters'
    ).isLength({ min: 6})
],
async (req,res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const { username, password} = req.body;

    try {
        let user = await User.findOne({ username });

        if(user) {
            res.status(400).json({errors: [{msg: 'User already exists'}]});
        }

        user = new User({
            username,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 36000 },
            (err, token) => {
                if(err) throw err;
                res.json({ token }); 
            }
        );

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }

});

module.exports = router;