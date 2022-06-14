const express = require("express");
const Joi = require("joi");
const router = express.Router();
const productRepository = require("./product.repository");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const { limit, page } = req.query;

      const safeLimit = limit ? parseInt(limit) : 10;
      const safeOffset = page ? parseInt(page) * safeLimit - safeLimit : 0;

      const allProducts = await productRepository.getAllProducts();

      const products = await productRepository.getProducts(
        safeLimit,
        safeOffset
      );

      const currentPage = page ? parseInt(page) : 1;

      const responseResults = {
        products,
        currentPage: currentPage,
        itemsPerPage: safeLimit,
        totalItems: allProducts.length,
        totalPages: Math.ceil(allProducts.length / safeLimit),
      };

      console.log(responseResults.products);

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
