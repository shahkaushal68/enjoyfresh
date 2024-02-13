const { Op } = require("sequelize");
var jwt = require('jsonwebtoken');
const db = require("../models");
const { successResponse, failResponse, validationError } = require("../helpers/response");

const User = db.User;

const loginWithOtp = async (req, res) => {
    try {
        const isUserExit = await User.findOne({ where: { mobile: req.body.mobile } });
        //console.log("isUserExit-----", isUserExit);
        if (isUserExit) {
            await User.update(
                {
                    otp: "123456"
                },
                {
                    where: { mobile: req.body.mobile }
                }
            )
            return res.send(successResponse("Send User Otp Successfully"));
        } else {
            const addUser = await User.create({ mobile: req.body.mobile, privacyPolicy: req.body.privacyPolicy });
            addUser.set({
                otp: 999999
            });
            await addUser.save();
            return res.send(successResponse("Send Created Otp Successfully"));
        }

    } catch (error) {
        res.send(failResponse(error));
        console.log("error", error);
    }
}

const verifyOtp = async (req, res) => {
    try {
        const isOtpValid = await User.findOne({
            where: {
                [Op.and]: [
                    { mobile: req.body.mobile },
                    { otp: req.body.otp }
                ]
            }
        });
        if (isOtpValid) {
            //console.log("isOtp----", isOtpValid);
            var token = jwt.sign({ id: isOtpValid?.dataValues?.id, mobile: isOtpValid?.dataValues?.mobile }, process.env.JWT_SECRETE);
            return res.send(successResponse("Otp Verify Successfully", { token }));
        } else {
            return res.send(validationError("Please enter Valid Otp Number"));
        }
        //console.log("isOtpValid--------", isOtpValid);
    } catch (error) {
        res.send(failResponse(error));
        //console.log("error", error);
    }
}

module.exports = { loginWithOtp, verifyOtp }