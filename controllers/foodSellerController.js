const { successResponse, failResponse, validationError } = require("../helpers/response");
const { getUserProfileDetails } = require("../services/userProfileServices");
const db = require("../models");
const { Op } = require("sequelize");

const FoodSeller = db.FoodSeller;
const BusinessLocation = db.BusinessLocation;
const FoodSellerCuisine = db.FoodSellerCuisine;
const WeekDay = db.WeekDay;
const OpeningClosingTime = db.OpeningClosingTime;



const addOrUpdateFoodSellerDetails = async (req, res) => {
    const t = await db.sequelize.transaction();
    try {
        const {
            businessName,
            lattitude,
            longitude,
            address,
            sellType,
            gstNumber,
            fssaiNumber,
            selectcuisines,
            foodType,
            deliveryArea,
            deliverType,
            hereAboutUs,
            tellUsYourSelf,
            openingClosingTime
        } = req.body

        const userDetails = await getUserProfileDetails(req.user.id)

        const FoodSellerData = {};
        const businessLocationData = {};

        const isRoleFoodSeller = userDetails?.UserRoles?.find((roleItem) => roleItem?.Role?.slug === "food-seller");

        //console.log("isRoleFoodSeller--------", isRoleFoodSeller);

        if (isRoleFoodSeller === undefined) return res.send(validationError("This user has not FoodSeller Role"));

        if (isRoleFoodSeller) {
            const isDataPresent = await FoodSeller.findOne({ where: { userId: req.user.id } });
            if (!isDataPresent) {

                FoodSellerData.userId = req.user.id;
                businessName ? FoodSellerData.businessName = businessName : null;
                sellType ? FoodSellerData.sellType = sellType : null;
                gstNumber ? FoodSellerData.gstNumber = gstNumber : null;
                fssaiNumber ? FoodSellerData.fssaiNumber = fssaiNumber : null;

                if (FoodSellerData !== null) {
                    const createFoodSeller = await FoodSeller.create(FoodSellerData, { transaction: t });

                    if (createFoodSeller) {

                        businessLocationData.foodSellerId = createFoodSeller?.dataValues?.id;
                        lattitude ? businessLocationData.lattitude = lattitude : null;
                        longitude ? businessLocationData.longitude = longitude : null;
                        address ? businessLocationData.address = address : null;
                        await BusinessLocation.create(businessLocationData, { transaction: t });

                        const cuisines = selectcuisines?.map((item) => {
                            return {
                                sellerId: createFoodSeller?.dataValues?.id,
                                cuisineId: item
                            }
                        });
                        await FoodSellerCuisine.bulkCreate(cuisines, { transaction: t });
                        await t.commit();
                        return res.send(successResponse("FoodSeller Details Created Successfully"));
                    }
                }
            } else {
                //console.log("in else condition");
                businessName ? FoodSellerData.businessName = businessName : null;
                sellType ? FoodSellerData.sellType = sellType : null;
                gstNumber ? FoodSellerData.gstNumber = gstNumber : null;
                fssaiNumber ? FoodSellerData.fssaiNumber = fssaiNumber : null;
                foodType ? FoodSellerData.foodType = foodType : null;
                deliveryArea ? FoodSellerData.zipCode = deliveryArea : null;
                deliverType ? FoodSellerData.deliverType = deliverType : null;
                hereAboutUs ? FoodSellerData.hereAboutUs = hereAboutUs : null;
                tellUsYourSelf ? FoodSellerData.tellUsYourSelf = tellUsYourSelf : null;

                await FoodSeller.update(FoodSellerData, {
                    where: {
                        [Op.and]: [{ id: isDataPresent.dataValues.id }, { userId: req.user.id }],
                    }
                });

                lattitude ? businessLocationData.lattitude = lattitude : null;
                longitude ? businessLocationData.longitude = longitude : null;
                address ? businessLocationData.address = address : null;

                await BusinessLocation.update(businessLocationData, {
                    where: { foodSellerId: isDataPresent.dataValues.id }
                });


                if (selectcuisines) {
                    await FoodSellerCuisine.destroy({
                        where: { sellerId: isDataPresent.dataValues.id }
                    });

                    const cuisines = selectcuisines?.map((item) => {
                        return {
                            sellerId: isDataPresent.dataValues.id,
                            cuisineId: item
                        }
                    });
                    await FoodSellerCuisine.bulkCreate(cuisines);
                }

                //const fetchweekDay = await WeekDay.findAll({});
                //console.log("fetchweekDay------------", fetchweekDay);

                //console.log("openingClosingTime--", openingClosingTime);

                const timing = openingClosingTime?.map((item) => {
                    //console.log("item", item);
                    return {
                        foodSellerId: isDataPresent.dataValues.id,
                        weekDayId: item.weekDayId,
                        openingTime: item.openingTime,
                        closingTime: item.closingTime
                    }
                });

                await OpeningClosingTime.bulkCreate(timing);

                return res.send(successResponse("FoodSeller Details Updated Successfully"));
            }
        }
    } catch (error) {
        await t.rollback();
        res.send(failResponse(error));
        console.log("error", error);

    }
}

const addOrEditUsingUpsert = async (req, res) => {
    try {
        const {
            businessName,
            lattitude,
            longitude,
            address,
            sellType,
            gstNumber,
            fssaiNumber,
            selectcuisines,
            foodType,
            deliveryArea,
            deliverType,
            hereAboutUs,
            tellUsYourSelf,
        } = req.body

        const userDetails = await getUserProfileDetails(req.user.id)

        const FoodSellerData = {};
        const businessLocationData = {};

        const isRoleFoodSeller = userDetails?.UserRoles?.find((roleItem) => roleItem?.Role?.slug === "food-seller");

        //console.log("isRoleFoodSeller--------", isRoleFoodSeller);

        if (isRoleFoodSeller === undefined) return res.send(validationError("This user has not FoodSeller Role"));

        const isDataPresent = await FoodSeller.findOne({ where: { userId: req.user.id } });


        console.log(isDataPresent.dataValues.id, "-------------------------");

        if (isRoleFoodSeller) {

            // FoodSellerData.userId = req.user.id;
            FoodSellerData.userId = 1,
                businessName ? FoodSellerData.businessName = businessName : null;
            sellType ? FoodSellerData.sellType = sellType : null;
            gstNumber ? FoodSellerData.gstNumber = gstNumber : null;
            fssaiNumber ? FoodSellerData.fssaiNumber = fssaiNumber : null;
            foodType ? FoodSellerData.foodType = foodType : null;
            deliveryArea ? FoodSellerData.zipCode = deliveryArea : null;
            deliverType ? FoodSellerData.deliverType = deliverType : null;
            hereAboutUs ? FoodSellerData.hereAboutUs = hereAboutUs : null;
            tellUsYourSelf ? FoodSellerData.tellUsYourSelf = tellUsYourSelf : null;

            const values = await FoodSeller.upsert(FoodSellerData, { returning: true })

            console.log(values);

        }



    } catch (error) {
        res.send(failResponse(error));
        console.log("error", error);
    }
}



module.exports = { addOrUpdateFoodSellerDetails, addOrEditUsingUpsert }