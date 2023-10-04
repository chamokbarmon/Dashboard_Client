// Import setup..............

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "flowbite-react";

// Import setup..............end

const DashboardDetails = () => {
  // state create .........

  const { productID } = useParams();
  const [product, setProduct] = useState({});
  console.log(product);

  //   fetch  set up.............

  useEffect(() => {
    axios
      .get("https://dashboard-server-theta.vercel.app/productDetails/" + productID)
      .then((data) => {
        setProduct(data.data);
      });
  }, []);

  //   fetch  set up.............End

  return (
    // card set up ...........

    <Card style={{ backgroundColor: "#1e2c3e" }} className="">
      <div>
        <img className="h-96 w-full rounded-lg" src={product?.img} alt="" />
      </div>
      <div>
        <h5 className="text-3xl font-bold text-white dark:text-white">
          Country : {product?.country ? product?.country : "India"}
        </h5>
        <p className=" text-base text-white dark:text-gray-400 sm:text-lg">
          Topic : {product?.topic ? product?.topic : "No Topic"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Title : {product?.title ? product?.title : "No Title"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Intensity : {product?.intensity ? product?.intensity : "No intensity"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Relevance : {product?.relevance ? product?.relevance : "No relevance"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Likelihood :{" "}
          {product?.likelihood ? product?.likelihood : "No likelihood"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Insight : {product?.insight ? product?.insight : "No insight"}
        </p>
        <p className="text-base text-white dark:text-gray-400 sm:text-lg">
          Published : {product?.published ? product?.published : "No published"}
        </p>
        <div className=" space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <div />
          <div>
            <button className="btn w-24 mt-5 bg-sky-500 p-3 rounded-xl font-sans text-sm font-semibold">
              <Link className="font-bold italic " to="/">
                Back
              </Link>
            </button>
          </div>
          <div />
        </div>
      </div>
    </Card>
    // card set up ...........End
  );
};

export default DashboardDetails;
