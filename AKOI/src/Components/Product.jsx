import { useState, useEffect } from "react";
import React from "react";
import "../Style/product.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { storeData } from "../redux/storeData/action";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

// import {useNavigate,useParams} from 'react-router';
import { Button, ButtonGroup } from "@mui/material";
import { addCart } from "../redux/Cart/action";

const ProductPage = () => {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    return axios({
      url: `https://akoi.herokuapp.com/products?_page=${page}&_limit=14
      `,
      method: "GET",
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        console.log(response.data);
        dispatch(storeData(response.data));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const data = useSelector((state) => state.Data.data);
  console.log(data);
  const CartData = useSelector((state) => state.Cart.cart);
  console.log(CartData);

  const Send = (e) => {
    // console.log(e)
    dispatch(addCart(e));
  };

  return (
    <div>
      <div className="flex">
        <div>
          <Box
            sx={{
              display: "flex",

              "& > *": {
                m: 2,
              },
            }}
          ></Box>
        </div>

        <div className="container ">
          {data.map((a) => {
            return (
              <>
                <div className="borde w-80 " key={a.id}>
                  <div className="h-full ">
                    <div>
                      <img src={a.images} alt="" id="img" />
                    </div>

                    <div className=" mt-1 mb-2  ">
                      <div className="text-green-500 font-semi-bold borde w-72 ">
                        {a.title}
                      </div>

                      <div className="  ">
                        <div className="flex w-48">
                          <div className="text-black-400 font-bold ">
                            <p>₹ {a.price}</p>
                          </div>
                        </div>
                      </div>
                      <div className="b  w-2/5 text-white margin-auto">
                        <div>
                          <button
                            className="bg-green-500 shadow-lg rounded-2xl p-2 hover:bg-black-600 shadow-blue-500/50   "
                            onClick={() => {
                              Send(a);
                            }}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </div>
  );
};

export { ProductPage };
