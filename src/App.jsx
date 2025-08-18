import React, { useState } from 'react'
import ProductCard from './component/ProductCard';
import Ads from './component/ads';
import Sidebar from './component/sidebar';

function App() {

  const [Search, setSearch] = useState("");
  
  const product = [
    {
      id: 1,
      image: "./1.jpg",
      name: "IPHONE 13 PRO",
      price: "$799",
      description: " a high-end smartphone featuring a 6.1-inch Super Retina XDR display with ProMotion technology, offering adaptive refresh rates up to 120Hz for smooth visuals",
    },
    {
      id: 2,
      image: "./2.jpg",
      name: "WIRELESS HEADPHONE",
      price: "$99.95",
      description: "Enjoy high sound quality all day long. The WH-CH520 headphones with up to 50 hours of battery life, stable connectivity, and enhanced call performance, meet the demands of your day."
    },
    {
      id: 3,
      image: "./3.jpg",
      name: "ASUS LAPTOP",
      price: "$1,800",
      description: " the ASUS TUF Gaming line offers a range of laptops with varying specifications. "
    },
    {
      id: 4,
      image: "./4.jpg",
      name: "SMART WATCH",
      price: "$24.15",
      description: "Buy LIGE Smart Watch For Women Full Touch Screen Bluetooth Call Waterproof Watches Sport Fitness Tracker Smartwatch Lady Reloj Mujer and . Find more then 6090301 products and Enjoy.."
    },
    {
      id: 5,
      image: "./5.jpg",
      name: "CANON EOS 7D",
      price: "$1,699",
      description: "The Canon EOS 7D Mark II is a digital single-lens reflex (DSLR) camera known for its robust build and advanced features, particularly suited for wildlife, sports, and action photography. ."
    },
    {
      id: 6,
      image: "./6.jpg",
      name: "RUNNING SHOES",
      price: "$100",
      description: "Designed to be as light as possible to enhance speed and reduce fatigue during runs. ."
    }
  ];

  const prodData = product.filter((prod) => {
    return prod.name.toLowerCase().includes(Search.toLocaleLowerCase()) || prod.price.toLowerCase().includes(Search.toLocaleLowerCase())
  })


  return (
    <div className='w-auto h-auto flex items-center justify-center'>
      <div className='absolute left-15 top-50 fixed'>
            <Sidebar Search={Search} setSearch={setSearch}/>
          </div>
      <div className='flex flex-wrap gap-8 w-1/2 justify-center p-0 m-10'>
        {prodData.map((proditem) => (
          <ProductCard key={proditem.id} image={proditem.image} name={proditem.name} price={proditem.price} description={proditem.description} onBuy={() => console.log(`Thank you for buying: ${product.name}`)} />
        ))}
      </div>
          <div className='absolute right-5 fixed top-10'>
            <Ads/>
          </div>
          
    </div>

  )
}

export default App
