// import Image from 'next/image';
// import Link from 'next/link';

// type Product = {
//   image: string;
//   title: string;
//   price: string;
//   id:number

// };



// export default function Ourshop() {
//   const products: Product[] = [
//     { image: "/s1.png", title: "Fresh Lime", price: "38.00" ,id:1},
//     { image: "/s2.png", title: "Chocolate Muffin", price: "28.00",id:2 },
//     { image: "/s3.png", title: "Burger", price: "21.00",id:3 },
//     { image: "/s4.png", title: "Country Burger", price: "45.00",id:4 },
//     { image: "/s5.png", title: "Drink", price: "23.00",id:5 },
//     { image: "/s6.png", title: "Pizza", price: "43.00",id:6 },
//     { image: "/s7.png", title: "Cheese Butter", price: "10.00" ,id:7},
//     { image: "/s8.png", title: "Sandwiches", price: "25.00",id:8 },
//     { image: "/s9.png", title: "Chicken Chup", price: "12.00",id:9 },
    
//   ];
  
//   return (
//     <div className="container mx-auto px-4 sm:px-8 py-8">
//       <div className="flex flex-col gap-8 lg:flex-row">
//         {/* Main Content */}
//         <div className="flex-1">
//           <div className="flex flex-wrap gap-4 mb-6">
//             </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product) => {
//                 return(
//                     <Link href={`/products/${product.id}`}>
//                <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
//                 <div className="relative w-full aspect-[4/3]">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={400}
//                     height={400}
//                     className="object-contain"
//                   />
                  
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-amber-500 font-semibold">${product.price}</span>
                    
//                   </div>
//                 </div>
//               </div>
//              </Link>
//                 )
// })}

//           </div>
//         </div>

//         </div> 
//     </div>
//   );
// }


import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id: string;
  image: string;
  name: string;
  price: string;
};

export default async function Ourshop() {
  const products: Product[] = await client.fetch(`
   *[_type=="product"]{
  name,
    image,
    price,
    _id
}
  `);

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
            <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-amber-500 font-semibold"> Price:${product.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
