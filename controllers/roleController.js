const { successResponse, failResponse } = require("../helpers/response");
const db = require("../models");

const Role = db.Role;

const getAllRoles = async (req, res) => {
    try {
        const allRolesData = await Role.findAll({});
        //console.log("allRolesData---", allRolesData);
        return res.send(successResponse("Fetch All roles successfully", allRolesData));
    } catch (error) {
        res.send(failResponse(error));
        console.log("error", error);
    }
}

module.exports = { getAllRoles }