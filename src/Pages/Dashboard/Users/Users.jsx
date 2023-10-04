import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import "./Users.css"
const Users = () => {
  const [product, setProduct] = useState([]);

  // Define the URL of your Express.js server
  // Update with your server URL

  //   Make a GET request to the /product endpoint
  axios
    .get(`https://dashboard-server-theta.vercel.app/product`)
    .then((response) => {
      setProduct(response);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error.message);
    });
  return (
    <div >
      <div class=" h-screen rounded-lg font-bold relative overflow-x-auto shadow-md sm:rounded-lg width ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs sticky top-0 bg-cyan-800 text-white uppercase width dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Intensity
              </th>
              <th scope="col" class="px-6 py-3">
                Relevance
              </th>
              <th scope="col" class="px-6 py-3">
                Published
              </th>
              <th scope="col" class="px-6 py-3">
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            {product?.data?.map((pr) => (
              <tr class=" border-b bg- rounded-b-lg  rounded-lg text-white dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  {pr?.topic}
                </th>
                <td class="px-6 py-4">
                  {pr?.intensity ? pr?.intensity : "No Intensity"}
                </td>
                <td class="px-6 py-4">
                  {pr?.relevance ? pr?.relevance : "Relevance"}
                </td>
                <td class="px-6 py-4">
                  {pr?.published ? pr?.published : "Published"}
                </td>
                <td class="px-6 py-4">{pr?.country ? pr?.country : "India"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
