const getProductsOfNormalQuality = (newproductList) => {
  return newproductList.filter((product) => product.quality === "Normal");
};

const getProductImageWithPngExtension = (newproductList) => {
  const result = newproductList.filter(
    (product) => product.productImage.at(-2) === "n"
  );

  return result;
};

const getCalorieOfTheMostExpensiveProduct = (newproductList) => {
  const biggestPrice = Math.max(
    ...newproductList.map((pArray) => pArray.price)
  );

  return newproductList.find((pArray) => pArray.price === biggestPrice)
    .totalCalories;
};

let sortByExpirationDate;

sortByExpirationDate = (productList) => {
  return productList.sort(
    (a, b) => new Date(a.expireDate) - new Date(b.expireDate)
  );
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
