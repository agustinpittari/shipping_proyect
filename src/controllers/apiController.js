const {Shipping} = require('../database/models')
const geolib = require('geolib')

module.exports = {
    index:async (req, res) => {
        let shippin = await Shipping.findAll()
        let distance = geolib.getDistance({ latitude: 51.5103, longitude: 7.49347 },
            { latitude: "51° 31' N", longitude: "7° 28' E" })
        console.log(distance);
        res.send('distancia entre a y b ' + (distance/1000) +'km')
    }
}