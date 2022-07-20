import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { observer} from "mobx-react";
const Homeviews = observer(() =>{

  
  return (
    <>
    
      <body>
        <div className="container mx-auto p-5">
        <NavBar></NavBar>
        <Headers></Headers>

        
        </div>

        <div className="my-20">
          <div class="flex flex-row justify-between my-5 ">
            <h2 class="text-3xl pl-5 font-bold">Produk Pilihan</h2>
            <a
              class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center m-5"
              href="/shop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              View All
            </a>
          </div>



          <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-5">
        <ProductCard></ProductCard>
          </div>
        </div>

        <Footer></Footer>
      </body>
    </>
  );
})

export default Homeviews;