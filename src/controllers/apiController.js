const {Shipping} = require('../database/models')
const geolib = require('geolib');

module.exports = {
    index:async (req, res) => {
        res.json({
            "recursos_disponibles": [
                {
                    metodo: "POST",
                    ruta:"/v1/create"
                },
                {
                    metodo: "PUT",
                    ruta:"/v1/update/{id}"
                },
                {
                    metodo: "GET",
                    ruta:"/v1/status/{id}"
                }
            ]
        });
    },
    create: async (req, res) => {
        let data = req.body;
        let aprox_distance = geolib.getDistance(
            {
                lat:Number(data.origin_lat),
                lng:Number(data.origin_long)
            },
            {
                lat:Number(data.end_lat),
                lng:Number(data.end_long)
            }) / 1000;
        try {
            let newShipping = Shipping.create({
                ...req.body,
                aprox_distance
            });
            res.status(200).json({message: 'Creado con exito'});
        }catch(err){res.send(err)};
    },
    update: async (req, res) => {
        let data = req.body;
        let fecha = new Date;
        let shippingToEdit = await Shipping.findByPk(req.params.id);
        let aprox_distance = geolib.getDistance(
            {
                lat:Number(data.current_lat),
                lng:Number(data.current_long)
            },
            {
                lat:Number(shippingToEdit.end_lat),
                lng:Number(shippingToEdit.end_long)
            }) / 1000;

        try{
            let updateShipping = await Shipping.update({
                ...req.body,
                aprox_distance,
                finish_at: data.status == 'Entregado' ? fecha : null
            },
            {
                where: {
                    id: req.params.id
                }
            });

            res.json(updateShipping);

        }catch(err){res.send(err)};

    },
    status: async (req, res) => {
        let shipping = await Shipping.findByPk(req.params.id)
        res.json({
            parametros:req.params,
            datos_envio:{
                customer: shipping.customer,
                descrip: shipping.descrip,
                status: shipping.status,
                aprox_distance: shipping.aprox_distance,
            }
        })
    }
};