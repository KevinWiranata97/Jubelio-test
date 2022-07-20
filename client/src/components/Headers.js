export default function Headers(){
return(
    <>
      <div class="md:flex md:flex-row mt-20">
            <div class="md:w-2/5 flex flex-col justify-center items-center">
              <h2 class="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
                Some Catchy Title Here
              </h2>
              <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
                Our brand tagline goes here.
              </p>
              <p class="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
                Our brand motto goes here.
              </p>
              <a
                href="a.com"
                class="bg-gradient-to-r from-blue-600 to-white-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5 hover:to-blue-800"
              >
                Shop Now
              </a>
            </div>
            <div class="md:w-3/5">
              <img
                src="https://jubelio.com/wp-content/uploads/2020/11/Group-2821@3x.png"
                class="w-full rounded-lg shadow-lg"
                alt="hero"
              />
            </div>
          </div>
    </>
)
}