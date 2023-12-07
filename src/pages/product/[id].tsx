import { fetchSingleProduct } from "@/apiCalls/apiCalls";
import SelectedProduct from "@/components/Other/SelectedProduct";
import Layout from "@/layout/Layout";
import { selectedProduct } from "@/redux/productSlice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Product = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleProduct(router?.query?.id as string);
  }, [router?.query?.id]);

  const getSingleProduct = async (prodId: string) => {
    if (prodId) {
      const singleProd = await fetchSingleProduct(prodId);
      dispatch(selectedProduct(singleProd));
    }
  };

  return (
    <Layout>
      <SelectedProduct />
    </Layout>
  );
};

export default Product;
