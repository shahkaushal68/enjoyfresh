const db = require("../models");

const User = db.User;
const UserRole = db.UserRole;
const Role = db.Role;


const getUserProfileDetails = async (id) => {
    //console.log("id---", id);
    try {
        const getSingleUser = await User.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                model: UserRole,
                //as: "userrole"
                attributes: {
                    exclude: ["roleId", "createdAt", "updatedAt"]
                },
                include: [{
                    model: Role,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
                }]
            }],
            //raw: true,

        });
        console.log("-=----------------------<>>>", getSingleUser);
        return getSingleUser;
    } catch (error) {
        //console.log("error", error);
        return error
    }
}

module.exports = { getUserProfileDetails }