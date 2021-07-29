module.exports = (sequelize, dataTypes) => {

    let alias = 'Shipping';

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer: {
            type: dataTypes.STRING(100)
        },
        descrip: {
            type: dataTypes.TEXT
        },
        status: {
            type: dataTypes.STRING(10)
        },
        origin_lat: {
            type: dataTypes.DECIMAL(11,8)
        },
        origin_long: {
            type: dataTypes.DECIMAL(11,8)
        },
        current_lat: {
            type: dataTypes.DECIMAL(11,8)
        },
        current_long: {
            type: dataTypes.DECIMAL(11,8)
        },
        end_lat: {
            type: dataTypes.DECIMAL(11,8)
        },
        end_long: {
            type: dataTypes.DECIMAL(11,8)
        },
        aprox_distance: {
            type: dataTypes.FLOAT
        },
        finish_at: {
            type: dataTypes.DATE
        }
    };

    let config = {
        timestamps: false
    }

    const Shipping = sequelize.define(alias, cols, config)
    
    return Shipping
}