const express = require('express')
const router = express.Router()

const authRouter = require("./authRoute");
const userRouter = require("./userRoute");
const foodSellerRouter = require("./foodSellerRoute");
const roleRouter = require("./roleRoute");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/foodseller", foodSellerRouter);
router.use("/roles", roleRouter);

module.exports = router