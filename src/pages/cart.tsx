import React, { useContext, useState } from 'react'
import { Trash, Heart } from 'lucide-react'
import BreadCrumbs from '../components/BreadCrumbs'
import { CartContext } from '../context';
import { IMAGE_URL, instance, sendEmail } from '../helpers';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState<string>('');
  const [loading, setLoading] = useState(false);


  const sendMail = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }
    setLoading(true);

    try {
      const data = cart.map(item => item.name);

      const dataForSend = [];

      cart.forEach(item => {
        dataForSend.push({
          name: item.name,
          image: item.image[0],
        })
      })


      const response = await sendEmail(email, number, dataForSend);

      const res = instance.post("/mail.php", {
        address: email,
        data: data
      })

      setCart([]);
      alert("Order placed successfully");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");

    } finally {
      setLoading(false);
    }

  }

  return (
    <>
      <BreadCrumbs page={'Cart'} />
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        {/* <h2 className="text-3xl font-bold text-center">Your cart</h2> */}
        {/* <p className="mt-3 text-sm font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
          praesentium incidunt.
        </p> */}
        <ul className="flex flex-col divide-y divide-gray-200">
          {cart.map((product) => (
            <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                  src={IMAGE_URL + product.image[0]}
                  alt={product.name}
                />
                <div className="flex w-full flex-col justify-between pb-4">
                  <div className="flex w-full justify-between space-x-2 pb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8 uppercase">{product.name}</h3>
                      <p className="text-sm">{product.color}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{product.price}</p>
                    </div>
                  </div>
                  <div className="flex divide-x text-sm">
                    <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0" onClick={() => setCart(cart.filter(item => item.name !== product.name))}>
                      <Trash size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>


        {
          cart.length == 0 ? <span className="text-sm text-center font-semibold text-gray-700">Your cart is empty</span>
            :
            <div className="flex flex-col space-y-4">
              <input type='email' className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='text'
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                placeholder='Enter number'
                value={number}
                maxLength={10}
                onChange={(e) => setNumber(e.target.value.replace(/\D/g, ''))} />
            </div>
        }

        <div className="flex justify-end space-x-4">
          <Link to="/"
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Back to shop
          </Link>



          {
            cart.length > 0 && <button
              type="button"
              onClick={sendMail}
              disabled={loading}
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {loading ? "Checkout..." : "Checkout"}
            </button>
          }
        </div>
      </div >
    </>
  )
}
export default Cart