import React, {useState} from 'react';
import CartPanel from "../Features/cart/CartPanel";
import ShopModal from "../Hooks/ShopModal";
import {useSelector} from "react-redux";
import {selectShopCart} from "../Features/cart/cartSlice";

const Navbar = () => {
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const handleClickShopModal = () => setCartOpen((current) => !current);
    const itemsInCart = useSelector(selectShopCart)
    const additionalQuantity = itemsInCart
        .filter(item => item.quantity! >= 2)
        .map(item => item.quantity)
        .reduce((prev,curr) => prev! + curr!, 0)
    const onlyOneQuantityItems = itemsInCart
        .filter(item => item.quantity! === 1)

    return (
       <>
           <nav id="header" className="w-full z-10 top-0 py-1 sticky bg-white">
               <div className="w-full container mx-auto flex bg-white flex-wrap items-center justify-between mt-0 px-6 py-3">

                   <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
                       <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20"
                            height="20" viewBox="0 0 20 20">
                           <title>menu</title>
                           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                       </svg>
                   </label>
                   <input className="hidden" type="checkbox" id="menu-toggle"/>
                   <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                       <nav>
                           <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                               <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                      href="/">Shop</a></li>
                               <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                      href="/about">About</a></li>
                               <li><a className="md:hidden inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                      href="/favorites">Favorites</a></li>
                           </ul>
                       </nav>
                   </div>


                   <div className="order-1 md:order-2">
                       <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                          href="/">
                           <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24">
                               <path
                                   d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"/>
                           </svg>
                           NORDICS
                       </a>
                   </div>
                   <label htmlFor="nav-content" className="cursor-pointer md:hidden order-2" onClick={handleClickShopModal}>
                       <p className="absolute top-0.5 pl-6 pt-1 text-xl md:text-lg text-yellow-500">{onlyOneQuantityItems.length + additionalQuantity! !== 0 ? onlyOneQuantityItems.length + additionalQuantity! : null}</p>
                       <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24">
                           <path
                               d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"/>
                            <title>shopMenu</title>
                           <circle cx="10.5" cy="18.5" r="1.5"/>
                           <circle cx="17.5" cy="18.5" r="1.5"/>
                       </svg>
                   </label>
                   <input className="hidden" type="checkbox" id="nav-content"/>

                   <div className="hidden md:flex md:items-center md:w-auto order-2 md:order-3" id="shopMenu" >
                           <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="shopMenu">
                               <a className="md:flex items-center justify-between inline-block no-underline hover:text-black" href="/">
                                   <svg className="fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24">
                                       <circle fill="none" cx="12" cy="7" r="3"/>
                                       <path
                                           d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"/>
                                   </svg>
                               </a>
                               <a className="pl-3 inline-block no-underline hover:text-black" href="/favorites">
                                   <svg
                                       className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 24 24"
                                   >
                                       <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                   </svg>
                               </a>
                               <button onClick={handleClickShopModal} className="pl-3 inline-block no-underline hover:text-black">
                                   <p className="absolute top-0.5 pl-6 pt-2 text-lg text-yellow-500">{onlyOneQuantityItems.length + additionalQuantity! !== 0 ? onlyOneQuantityItems.length + additionalQuantity! : null}</p>
                                   <svg className="fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24">
                                       <path
                                           d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z"/>
                                       <circle cx="10.5" cy="18.5" r="1.5"/>
                                       <circle cx="17.5" cy="18.5" r="1.5"/>
                                   </svg>
                               </button>
                           </div>
                   </div>
               </div>
           </nav>
           <ShopModal open={cartOpen} onClose={handleClickShopModal}>
               <CartPanel onClose={handleClickShopModal}/>
           </ShopModal>
       </>
    );
};

export default Navbar;