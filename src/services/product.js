const {Products, Categories} = require('../database/models/index');

const service = {
    createProduct: async (data) => {
        let newProduct = {
            name: data.name,
            price: data.price,
            category_id: data.category
        };
        Products.create(newProduct);
    }, // C

    findAll: async () => {
        let prods = await Products.findAll({
            include: ["Category"]
        });
        // console.log(prods);
        return prods;
    }, // R
    findById: async (id) => {
        let productFound = Products.findOne({
            where: {
                id: id
            }
        })
        return productFound;
    }, // R

    updateProduct: async (id, data) => {
        let newData = {
            name: data.name,
            price: data.price,
            category_id: data.category
        };

        let resultado = Products.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    },
    uploadImage: async (id, data) => {
        let newData = {
            image: data.image
        };

        // newData.images.forEach((image) => {
        //     Image.create({
        //         name: image.filename,
        //         product_id: id
        //     })
        // })

        let resultado = Products.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteProduct: async (id) => {
        let resultado = Products.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;