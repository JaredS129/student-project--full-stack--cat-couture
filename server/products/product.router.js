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
      const safeOffset = page ? parseInt(page) * 10 - 10 : 0;

      const allProducts = await productRepository.getAllProducts();

      const products = await productRepository.getProducts(
        safeLimit,
        safeOffset
      );

      const responseResults = {
        products,
        currentPage: parseInt(page),
        itemsPerPage: safeLimit,
        totalItems: allProducts.length,
        totalPages: Math.ceil(allProducts.length / safeLimit),
      };

      console.log(responseResults.products);

      if (products.length === 0) {
        console.log("hi");
        return res.status(404).json({ message: "page not found" });
      }

      return res.json(responseResults);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
