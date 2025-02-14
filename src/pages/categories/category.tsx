import { instance, IMAGE_URL } from "@helpers";
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";

function Category() {
  const param = useParams(); // inside your component

  const val = Object.values(param)[0];
  const navigate = useNavigate();
  const str = val?.split("/");

  const firstValue = str ? str[0] : " ";
  const lastValue = str ? str[str.length - 1] : " ";

  const id = firstValue == lastValue ? firstValue : lastValue;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const categories = async () => {
    try {
      setLoading(true);
      const uri = decodeURI(id);
      const fd = new FormData();
      fd.append("id", uri);
      const response = await instance.post(
        "/category.php?case=get_categories_by_parent",
        fd
      );
      setProducts(response.data);

      // console.log(response.data)
      console.log(products);

      // const images = response.data?.map((item) => {
      //   const images = item.images;
      //   console.log(images);
      // })

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    categories();
  }, [location]);

  return (
    <div>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-5 md:gap-6 md:space-y-0 lg:grid-cols-5">
        {/* {products.length == 0 || !products ? <Spinner animation="border" variant="primary" /> : null} */}
        {products && products?.children
          ? products.children.map(
              (
                item: {
                  is_product: unknown;
                  product: { id: string };
                  cname:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<unknown>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined;
                  cimage: unknown;
                },
                i: React.Key | null | undefined
              ) => (
                <div
                  onClick={() => {
                    navigate(
                      item?.is_product
                        ? "/product/" + item?.product?.id
                        : location.pathname + "/" + item.cname
                    );
                  }}
                  key={i}
                  className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[250px] cursor-pointer shadow"
                >
                  <img
                    src={IMAGE_URL + item.cimage}
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-contain w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-t hover:from-purple-400 to-transparent w-full">
                    <h1 className="absolute bottom-2 left-4 text-sm uppercase text-purple-800 line-clamp-1 font-bold">
                      {item.cname}
                    </h1>
                  </div>
                </div>
              )
            )
          : products.map((product, index) => (
              <div
                onClick={() => {
                  if (product.id) {
                    navigate("/product/" + product?.id);
                  } else {
                    navigate("/");
                  }
                }}
                key={index}
                className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[250px] cursor-pointer shadow"
              >
                <img
                  onClick={() => console.log(product?.images)}
                  src={
                    IMAGE_URL +
                    product?.images
                      ?.split(",")
                      .map((item) => item.replace(/"/g, ""))[0]
                  }
                  alt={product?.name}
                  className="z-0 rounded-md object-contain w-full h-full"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t hover:from-purple-400 to-transparent w-full">
                  <h1 className="absolute bottom-2 left-4 text-sm uppercase text-purple-800 line-clamp-1 font-bold">
                    {product?.name || "No Category"}
                  </h1>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Category;
