import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const countAllProducts = async() => {
  return prisma.product.count()
};
export const countAllProductsOnStock = async(uuid: string) => {
  const allProductsOnStock = await prisma.warehouse.findUnique({
    where: { uuid },
    include: {
        products: true,
    },
  })
  .products();
  return allProductsOnStock?.length || 0;
};
export const countProduct = async (sku: string) => {
  return prisma.product.count({
    where: { sku },
  });
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const productsOnStock = await prisma.warehouse
    .findUnique({
      where: { uuid },
    })
    .products({
      where: { sku },
    })
    return productsOnStock?.length || 0;
};

export const countProductByCategory = async (slug: string) => {
  const productByCategory = await prisma.category
    .findUnique({
      where: { slug },
    })
    .products();
    return productByCategory?.length || 0;
};

export const countProductOnStockByCategory = async (uuid: string, slug: string) => {
  const prodOnStockByCat = await prisma.warehouse
    .findUnique({
      where: { uuid },
    })
    .products({
      where: {
        categories: {
          some: { slug },
        },
      },
    });
    return prodOnStockByCat?.length || 0;
};
