const { successResponse, failResponse } = require("../helpers/response");
const db = require("../models");
const { Op } = require("sequelize");

const User = db.User;
const UserRole = db.UserRole;
const Role = db.Role;

const createProfile = async (req, res) => {
    try {
        //console.log("id", req.user);
        const updateProfile = await User.update(
            {
                fullName: req.body.fullName,
                email: req.body.email,
                termsAndCondition: req.body.termsAndCondition
            },
            {
                where: { id: req.user.id }
            }
        );
        const isRoleAssigned = await UserRole.findOne({
            where: {
                [Op.and]: [
                    { userId: req.user.id },
                    { roleId: req.body.roleId }
                ]
            }
        });
        if (isRoleAssigned === null) {
            await UserRole.create({
                userId: req.user.id,
                roleId: req.body.roleId
            })
        }
        //console.log("isRoleAssigned-------", isRoleAssigned);
        return res.send(successResponse("User Profile updation successfully", updateProfile));
    } catch (error) {
        res.send(failResponse(error));
        //console.log("error", error);
    }
}



module.exports = { createProfile }