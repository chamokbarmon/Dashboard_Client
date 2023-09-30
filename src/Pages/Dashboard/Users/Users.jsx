import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";

const Users = () => {
  const [product, setProduct] = useState([]);

  // Define the URL of your Express.js server
  // Update with your server URL

  //   Make a GET request to the /product endpoint
  axios
    .get(`http://localhost:5000/product`)
    .then((response)=>{
      setProduct(response);
    
    })
    .catch((error)=>{
      // Handle errors here
      console.error("Error:", error.message);
    });
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg width ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase width dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product?.data?.map((pr)=>(
              <tr class="bg-black border-b  text-white dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  {pr?.topic}
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
