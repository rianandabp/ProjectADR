const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');



router.get('/', async (req, res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

router.patch(
    '/:id', 
    check('companyName','companyName is required').notEmpty(),
    check('address', 'Address is required').notEmpty(),
    check('ownerName', 'Owner Name is required').notEmpty(),
    check('accountNumber', 'Account Number is required').notEmpty(),
    check('bankAccount', 'Bank Account is required').notEmpty(),
    check('phoneNumber', 'Phone Number is required').notEmpty(),
    async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {companyName, address, ownerName, accountNumber, bankAccount, phoneNumber, description} = req.body;

    try {

        const profile = await Profile.findById(req.params.id);

        profile.companyName = companyName;
        profile.address = address;
        profile.ownerName = ownerName;
        profile.accountNumber = accountNumber;
        profile.bankAccount = bankAccount;
        profile.phoneNumber = phoneNumber;
        profile.description = description;

        await profile.save();

        res.json(profile);
        
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


router.post(
    '/',
    async (req,res) => {


        try{
            profile = new Profile({
                companyName: "ADR Motorsport",
                address: "Jalan Pondok Jengkol No. 101 Gading Serpong, Tangerang",
                ownerName: "Andre",
                accountNumber: "288 1717 109",
                bankAccount: "BCA",
                phoneNumber: "081806111149"
            });

            profile.save();
            res.send('Add profile success');

        } catch (err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)

module.exports = router;