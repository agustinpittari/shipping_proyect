const {Shipping} = require('../database/models')
const geolib = require('geolib')

module.exports = {
    index:async (req, res) => {

    },
    create: async (req, res) => {
        let data = req.body
        let aprox_distance = geolib.getDistance({lat:Number(data.origin_lat), lng:Number(data.origin_long)},{lat:Number(data.end_lat), lng:Number(data.end_long)}) / 1000
        let newShipping = Shipping.create({
            ...req.body,
            current_lat: data.origin_lat,
            current_long: data.origin_long,
            aprox_distance
        })
        res.status(200).json({message: 'succesfull created'})
    },
    update: async (req, res) => {
        let data = req.body
        let shippin = await Shipping.findByPk(req.params.id)
        let aprox_distance = geolib.getDistance({lat:Number(data.current_lat), lng:Number(data.current_long)},{lat:Number(shippin.end_lat), lng:Number(shippin.end_long)}) / 1000
        
        let updateShipping = await Shipping.update({
            ...req.body,
            aprox_distance
        },
        {where: {id:req.params.id}})
        res.json(updateShipping)

    }
}