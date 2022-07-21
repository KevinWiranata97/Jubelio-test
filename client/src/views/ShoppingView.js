import NavBar from "../components/NavBar";
import ShopCard from "../components/Shopcard";
import { observer } from "mobx-react";
import { Store } from "../stores/store";

import { useMemo, useEffect } from "react";

const ShoppingViews = observer(() => {
  const store = useMemo(() => new Store(), []);


  useEffect(() => {
   store.fetchProduct();
  }, [store.products]);

  console.log(store.products, "<<<<<");

  return (
    <>
      <div class="container mx-auto p-5">
        <NavBar></NavBar>
      </div>

      <div className="container py-4 flex items center gap-3 ml-6 ">
        <a href="/" className="text-red-500 text-base">
          <i className="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-400 pb-1">
          <i className="fas fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>

      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden ml-6">
          <div className="divide-y divide-gray 200 space-y-5">
            {/* category */}
            <div className="text-justify">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Bedroom</span>
                    <span className="mx-1 text-gray-600 text-sm">(15)</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Electronic</span>
                    <span className="ml-1 text-gray-600 text-sm">(15)</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Office</span>
                    <span className="ml-1 text-gray-600 text-sm">(15)</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Sofa</span>
                    <span className="ml-1 text-gray-600 text-sm">(15)</span>
                  </label>
                </div>
              </div>
            </div>
            {/* category end */}

            {/* location */}
            <div className="text-justify pt-6">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Location
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">DKI Jakarta</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Jabodetabek</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Bandung</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Medan</span>
                  </label>
                </div>
              </div>
            </div>

            {/* price */}
            <div className="text-justify pt-6">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <label className="text-gray-600 cursor-pointer">
                  <input
                    type="text"
                    className="w-full border border-slate-800 rounded-lg px-3 py-1 text-sm shadow-sm"
                    placeholder="min"
                  />
                </label>
                <span className="mx-3 text-gray-500">-</span>
                <label className="text-gray-600 cursor-pointer">
                  <input
                    type="text"
                    className="w-full border border-slate-800 rounded-lg px-3 py-1 text-sm shadow-sm"
                    placeholder="max"
                  />
                </label>
              </div>
            </div>

            {/* condition */}
            <div className="text-justify pt-6">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Condition
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Baru</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Bekas</span>
                  </label>
                </div>
              </div>
            </div>

            {/* offers */}
            <div className="text-justify pt-6">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Offers
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Cashback</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Free Shipping</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Discount</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <label className="text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    <span className="ml-2">Bundling Package</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar end */}

        {/* product */}

        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select className="w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 shadow-sm rounded-md mr-96">
              <option>Default sort</option>
              <option>Price low-high</option>
              <option>Price high-low</option>
              <option>Latest</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <div className="border w-10 h-9 flex items-center justify-center text-white bg-blue-500 rounded cursor-pointer">
                <i className="fas fa-th"></i>
              </div>

              <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>

          <div className="container pb-16 text-justify">
            <h2 className="text-2xl font-medium text-gray-600 uppercase mb-6">
              Top Picks
            </h2>

            <div className="grid grid-cols-4 gap-6">
              {store.products.map((products) => (
                <ShopCard products={products}></ShopCard>
              ))}
            </div>
          </div>
        </div>
        {/* product end */}
      </div>
    </>
  );
});

export default ShoppingViews;
