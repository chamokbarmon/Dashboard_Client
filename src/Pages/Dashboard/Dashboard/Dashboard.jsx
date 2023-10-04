import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css"
const Dashboard = () => {
  const [products, setProducts] = useState();
 

  axios
    .get("https://dashboard-server-theta.vercel.app/product")
    .then((res) => {
      if (res) {
        setProducts(res);
      } else {
        console.log(Error.message);
      }
    })

    .catch((error) => {
      console.log(error.message);
    });

  return (
    <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
    {
      products?.data?.slice(1,20).map((pro)=>
      <div class="max-w-sm  bg-black border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg h-52"
            src={pro?.img}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-white ">
             Country : {pro?.country ? pro?.country : "India" }
            </h5>
            <h5 class="mb-2 text-1xl font-bold tracking-tight text-white ">
               Topic :  {pro?.topic}
            </h5>
          </a>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
          {pro?.title.slice(0,100)}...
          </p>
          <Link
            to={`/productDetails/${pro._id}`}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      )  
    }
      
    </div>
  );
};

export default Dashboard;
