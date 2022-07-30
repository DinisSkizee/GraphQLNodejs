const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },

  Mutation: {
    newProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    newProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
