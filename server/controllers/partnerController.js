const ApiError = require('../error/apiError')
const { Partner } = require('../models/models')

class PartnerController {
    async getAllPartners(req, res, next) {
        try {
            const partners = await Partner.findAll()
            return res.json(partners)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }

    async getPartnersByType(req, res, next) {
        try {
            const {type} = req.params;
            const partners = await Partner.findAll({
                where: {
                    status: type
                }
            })
            return res.json(partners)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }
}


module.exports = new PartnerController();