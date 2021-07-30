const {Shipping} = require('../database/models')
const geolib = require('geolib')

module.exports = {
    index:async (req, res) => {

    },
    create: async (req, res) => {
        let data = req.body
        let aprox_distance = geolib.getDistance(
            {lat:Number(data.origin_lat), lng:Number(data.origin_long)},
            {lat:Number(data.end_lat), lng:Number(data.end_long)})
        let newShipping = Shipping.create({
            ...req.body,
            current_lat: data.origin_lat,
            current_long: data.origin_long,
            aprox_distance
        })
        res.json({
            meta:{
                status: 200,
                message: 'Ok'
            },
            data: {
                ...data,
                aprox_distance
            }
        })
    },
    update: async (req, res) => {
        let data = req.body
        // let updateShipping = Shipping.update({
        //     ...req.body,
        //     aprox_distance
        // },
        // {where: {id:req.params.id}})
    }
}