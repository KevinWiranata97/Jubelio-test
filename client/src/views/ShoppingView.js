import NavBar from "../components/NavBar";

export default function ShoppingViews() {
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
            <h2 className="text-2xl font-medium text-gray-600 uppercase mb-6">Top Picks</h2>

              <div className="grid grid-cols-4 gap-6">
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>

                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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

                    
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  <div className="bg-white shadow rounded overflow-hidden">
                    <div className="relative">
                      <img src="https://source.unsplash.com/1289x960?usb" alt="usb" className="w-full"></img>
                     
                    </div>

                    <div className="pt-4 pb-3 px-4">
                        <a href="/details">
                          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-500 transition">USB Cable Baseus</h4>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                              <p className="text-xl text-red-500 font-semibold">Rp.45.000.00</p>
                              <p className="text-sm text-gray-500 font-semibold line-through">Rp.99.000,00</p>
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
                    <a href="/details" className="block w-full py-1 text-center text-white bg-red-500 border border-red-500 rounded-b hover:bg-transparent hover:text-red-500 transition">Add to cart</a>
                  </div>
                  


              </div>
          </div>
        </div>
        {/* product end */}
      </div>
    </>
  );
}
