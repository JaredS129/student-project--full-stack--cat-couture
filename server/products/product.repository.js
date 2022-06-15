const db = require("../db");

module.exports = {
  getProducts: async (limit, page) => {
    try {
      const result = await db.query(
        `SELECT p.id,
                p.name,
                p.description,
                p.price,
                pc.name        AS "categoryName",
                pi.name        AS "imageName",
                pi.description AS "imageDescription",
                pd.value       AS "discountValue",
                dt.type        AS "discountType"
        FROM    product p
                LEFT JOIN product_category pc
                      ON p.product_category_id = pc.id
                LEFT JOIN product_image pi
                      ON p.product_image_id = pi.id
                LEFT JOIN product_discount pd
                      ON p.id = pd.product_id
                LEFT JOIN discount_type dt
                      ON pd.discount_type_id = dt.id
        ORDER  BY p.id
        LIMIT  $1 offset $2 `,
        [limit, page]
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  getTotalProducts: async () => {
    try {
      const result = await db.query(
        `SELECT COUNT(*)
        FROM product`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
