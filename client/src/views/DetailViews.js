import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
export default function DetailViews() {
  return (
    <>
      <div class="container mx-auto p-5">
        <NavBar></NavBar>
      </div>

      <div className="container grid grid-cols-2 px-48 py-24 gap-6">
        <div>
          <img
            src="https://source.unsplash.com/1289x960?usb"
            alt="usb"
            className="w-full"
          ></img>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img
              src="https://source.unsplash.com/1289x960?usb"
              alt="usb"
              className="w-full cursor-pointer border border-red-500"
            ></img>
            <img
              src="https://source.unsplash.com/1289x960?usb"
              alt="usb"
              className="w-full cursor-pointer border"
            ></img>
            <img
              src="https://source.unsplash.com/1289x960?usb"
              alt="usb"
              className="w-full cursor-pointer border"
            ></img>
            <img
              src="https://source.unsplash.com/1289x960?usb"
              alt="usb"
              className="w-full cursor-pointer border"
            ></img>
            <img
              src="https://source.unsplash.com/1289x960?usb"
              alt="usb"
              className="w-full cursor-pointer border"
            ></img>
          </div>
        </div>

        <div className=" text-justify">
          <h2 className="text-3xl font-medium uppercase mb-2 ">
            USB CABLE BASEUS 30 CM{" "}
          </h2>

          <div className="flex items-center mb-4 text-justify">
            <div className="flex gap-1 text-sm text-yellow-400 ">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="text-medium text-gray-500 ml-3">(150 reviews)</div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold">
              <span>Availiability:</span>
              <span className="text-green-500"> In Stock</span>
            </p>

            <p className="text-gray-800 font-semibold">
              <span>Brand:</span>
              <span className="text-slate-500 font-normal"> Baseus</span>
            </p>
            <p className="text-gray-800 font-semibold">
              <span>Category:</span>
              <span className="text-slate-500 font-normal"> Electronic</span>
            </p>

            <p className="text-gray-800 font-semibold">
              <span>SKU:</span>
              <span className="text-slate-500 font-normal"> 523412313</span>
            </p>
          </div>

          <div className="flex items-baseline mb-1 space-x-2 mt-4">
            <p className="text-2xl text-red-600 font-semibold">Rp. 20.000,00</p>
            <p className="text-base text-gray-600 line-through">
              Rp. 35.000,00
            </p>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis.
          </p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Amount</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex item-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-xl flex item-center justify-center ">
                4
              </div>
              <div className="h-8 w-8 text-xl flex item-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="flex gap-3 border-b border-gray-200 pb-9 mt-6">
           
            <Modal></Modal>

            <a
              href="/"
              className=" border border-gray-300 text-gray px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-red-600 transition"
            >
              <i className="fa-solid fa-dumpster"></i> Delete Product
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-9 text-justify pl-48">
        <h3 className="border-b border-gray-200 pb-3 font-medium">
          Product Details
        </h3>

        <div className="w-3/5 pt-6">
            <div className="text-gray-600 space-y-3">
            <p >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor
          </p>
            </div>
     
        </div>

        <table className="table-auto border-collapse w-1/4 text-left text-gray-600 text-sm mt-6">
            <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                <td className="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
                
            </tr>
            <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                <td className="py-2 px-4 border border-gray-300">Steel</td>
                
            </tr>
            <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                <td className="py-2 px-4 border border-gray-300">500g</td>
                
            </tr>
        </table>
      </div>

      <div class="my-20 mx-40">
          <div class="flex flex-row justify-between my-5 ">
            <h2 class="text-3xl pl-5 font-bold">Produk Pilihan</h2>
            <a
              class="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center m-5"
              href="a,com"
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
    </>
  );
}
