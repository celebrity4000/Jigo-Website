import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { instance, IMAGE_URL } from "@helpers";

// const products = [
//   {
//     id: 1,
//     name: 'AUTOMATION',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://jigoindia.com/wp-content/uploads/2018/08/1000-Watt-Series.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'PANEL ACCESSORIES',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://jigoindia.com/wp-content/uploads/2018/08/illuminated-push-button4.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'CABLE ACCESSORIES',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://jigoindia.com/wp-content/uploads/2018/07/3rd-Generation-Industrial-Plug-Socket.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'CONTROL & SWITCHGEAR',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://jigoindia.com/wp-content/uploads/2018/08/Float-Switch.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   // More products...
// ]

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  const categories = async () => {
    try {
      const response = await instance.get("/category.php");
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-5 md:gap-6 md:space-y-0 lg:grid-cols-5">
      {products.map((item, i) => (
        <Link to={"category/" + item.cname}>
          <div
            key={i}
            className="relative aspect-[16/5]  w-auto rounded-md md:aspect-auto md:h-[250px] shadow hover:scale-110 duration-200"
          >
            <img
              src={IMAGE_URL + item.cimage}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-contain"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t hover:from-purple-400 to-transparent">
              <div className="absolute bottom-4 left-4 text-left">
                <button className="mt-2 inline-flex font-bold cursor-pointer items-center text-sm text-purple-800 uppercase">
                  {item.cname} &rarr;
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default OurProducts;
