import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { id } = useParams();
    console.log(id);
    return <>product details page</>
}

export default ProductDetailsPage;