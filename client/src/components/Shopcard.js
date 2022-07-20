import { Link } from "react-router-dom"
export default function ShopCard({products}){
   

    return(
        <>
            <div className="bg-white shadow rounded overflow-hidden ">
                    <div className="relative">
                      <img src={products.image} alt="productImage" className="object-fill float-left w-full h-96"></img>
                     
                    </div>

                    <div className="pt-12 pb-3 pl-5 pr-5 ">
                        <Link to={`/details/${products.id}`} className="px-12 py-12">
                            
                          <h2 className="truncate text-center uppercase font-medium text-md  text-gray-800 hover:text-red-500 transition">{products.product_name}</h2>
                        </Link>
                        <div className="flex items-baseline mb-1 space-x-2 ">
                              <p className="text-xl text-red-500 font-semibold">Rp.{products.price.toLocaleString("id-ID")},00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.999.000,00</p>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                            <span><i className="fas fa-star"></i></span>
                          </div>
                          <div className="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                    <Link to={`/details/${products.id}`} className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition ">Add to cart</Link>
                    
                  </div>
                  
        </>
    )
}