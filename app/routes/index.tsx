import { useEffect, useState } from "react";

export default function Index() {

  const [date , setDate] = useState(0);

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear();
  }, [])
  
  return (
    <div>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
            {/* <!-- logo - start --> */}
            <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
              <svg x-comp="Wordmark" height="24" viewBox="0 0 659 165" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Remix Logo</title><path fill-rule="evenodd" clip-rule="evenodd" d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" fill="currentColor"></path><path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z" fill="currentColor"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="url(#paint0_linear)"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="currentColor"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="url(#paint1_linear)"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="currentColor"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="url(#paint2_linear)"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="currentColor"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="url(#paint3_linear)"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="currentColor"></path><defs><linearGradient id="paint0_linear" x1="591.052" y1="47.1035" x2="591.052" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="203.19" y1="44.0317" x2="203.19" y2="164.352" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="368.744" y1="44.0317" x2="368.744" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="499.172" y1="0" x2="499.172" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden lg:flex gap-12">
              <a href="#" className="text-indigo-500 text-lg font-semibold">Home</a>
              <a href="#features" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Features</a>
              <a href="#teams" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Teams</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">News</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- buttons - start --> */}
            <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
              <a href="/a/login" className="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">Sign in</a>

              <a href="/a/register" className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign up</a>
            </div>

            <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>

              Menu
            </button>
            {/* <!-- buttons - end --> */}
          </header>

          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            {/* <!-- content - start --> */}
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>

              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a href="#" className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

                <a href="#" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
      {/* <!-- hero - end --> */}

      {/* <!-- features - start --> */}
      <div id="features" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Growth</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Security</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}

            {/* <!-- feature - start --> */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-indigo-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Dark Mode</h3>
                <p className="text-gray-500 mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100">More</a>
              </div>
            </div>
            {/* <!-- feature - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- features - end --> */}

      {/* <!-- logo cloud - start --> */}
      <div id="customers" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Trusted by the best</h2>

          <div className="sm:h-40 grid grid-cols-2 md:grid-cols-4 sm:content-evenly bg-gray-100 rounded-lg gap-6 p-6">
            {/* <!-- logo - start --> */}
            <div className="flex justify-center text-gray-400">
              <svg className="w-auto h-6 sm:h-8 lg:h-10" width="154" height="39" viewBox="0 0 154 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.0227 31H39.9432V21.3864H49.4091V17.3295H39.9432V11.7841H50.4318V7.72727H35.0227V31ZM58.4915 7.72727H53.6506V31H58.4915V7.72727ZM70.2557 31.3409C75.5511 31.3409 78.8466 27.7159 78.8466 22.3409C78.8466 16.9318 75.5511 13.3182 70.2557 13.3182C64.9602 13.3182 61.6648 16.9318 61.6648 22.3409C61.6648 27.7159 64.9602 31.3409 70.2557 31.3409ZM70.2784 27.5909C67.8352 27.5909 66.5852 25.3523 66.5852 22.3068C66.5852 19.2614 67.8352 17.0114 70.2784 17.0114C72.6761 17.0114 73.9261 19.2614 73.9261 22.3068C73.9261 25.3523 72.6761 27.5909 70.2784 27.5909ZM85 31H90.1136L93.1136 20.0227H93.3295L96.3295 31H101.455L106.193 13.5455H101.307L98.6477 25.2045H98.5L95.6364 13.5455H90.8295L88.0114 25.2727H87.8523L85.1477 13.5455H80.25L85 31ZM108.776 31H113.616V21.125C113.616 18.9773 115.185 17.5 117.321 17.5C117.991 17.5 118.912 17.6136 119.366 17.7614V13.4659C118.935 13.3636 118.332 13.2955 117.844 13.2955C115.889 13.2955 114.287 14.4318 113.651 16.5909H113.469V13.5455H108.776V31ZM121.869 31H126.71V13.5455H121.869V31ZM124.301 11.2955C125.744 11.2955 126.926 10.1932 126.926 8.84091C126.926 7.5 125.744 6.39773 124.301 6.39773C122.869 6.39773 121.688 7.5 121.688 8.84091C121.688 10.1932 122.869 11.2955 124.301 11.2955ZM139.974 13.5455H136.509V12.375C136.509 11.1932 136.986 10.5 138.406 10.5C138.986 10.5 139.577 10.625 139.963 10.75L140.815 7.11364C140.213 6.93182 138.884 6.63636 137.395 6.63636C134.111 6.63636 131.668 8.48864 131.668 12.2841V13.5455H129.202V17.1818H131.668V31H136.509V17.1818H139.974V13.5455ZM152.216 13.5455H148.932V9.36364H144.091V13.5455H141.705V17.1818H144.091V26.2727C144.068 29.6932 146.398 31.3864 149.909 31.2386C151.159 31.1932 152.045 30.9432 152.534 30.7841L151.773 27.1818C151.534 27.2273 151.023 27.3409 150.568 27.3409C149.602 27.3409 148.932 26.9773 148.932 25.6364V17.1818H152.216V13.5455Z" />
                <path d="M24 8V20L12 32H0V20L12 8H24Z" />
              </svg>
            </div>
            {/* <!-- logo - end --> */}

            {/* <!-- logo - start --> */}
            <div className="flex justify-center text-gray-400">
              <svg className="w-auto h-6 sm:h-8 lg:h-10" width="186" height="39" viewBox="0 0 186 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.0909 31C50.1818 31 54.2841 26.6023 54.2841 19.3295C54.2841 12.0909 50.1818 7.72727 43.3295 7.72727H35.5568V31H43.0909ZM39.0682 27.9318V10.7955H43.1136C48.2045 10.7955 50.8295 13.8409 50.8295 19.3295C50.8295 24.8409 48.2045 27.9318 42.8977 27.9318H39.0682ZM63.4574 31.3864C66.3438 31.3864 67.9688 29.9205 68.6165 28.6136H68.7528V31H72.071V19.4091C72.071 14.3295 68.071 13.3182 65.2983 13.3182C62.1392 13.3182 59.2301 14.5909 58.0938 17.7727L61.2869 18.5C61.7869 17.2614 63.0597 16.0682 65.3438 16.0682C67.5369 16.0682 68.6619 17.2159 68.6619 19.1932V19.2727C68.6619 20.5114 67.3892 20.4886 64.2528 20.8523C60.946 21.2386 57.5597 22.1023 57.5597 26.0682C57.5597 29.5 60.1392 31.3864 63.4574 31.3864ZM64.196 28.6591C62.2756 28.6591 60.8892 27.7955 60.8892 26.1136C60.8892 24.2955 62.5028 23.6477 64.4688 23.3864C65.571 23.2386 68.1847 22.9432 68.6733 22.4545V24.7045C68.6733 26.7727 67.0256 28.6591 64.196 28.6591ZM89.6761 17.8068C88.9716 15.0909 86.8466 13.3182 83.0739 13.3182C79.1307 13.3182 76.3352 15.3977 76.3352 18.4886C76.3352 20.9659 77.8352 22.6136 81.108 23.3409L84.0625 23.9886C85.7443 24.3636 86.5284 25.1136 86.5284 26.2045C86.5284 27.5568 85.0852 28.6136 82.858 28.6136C80.8239 28.6136 79.517 27.7386 79.108 26.0227L75.8239 26.5227C76.392 29.6136 78.9602 31.3523 82.8807 31.3523C87.0966 31.3523 90.017 29.1136 90.017 25.9545C90.017 23.4886 88.4489 21.9659 85.2443 21.2273L82.4716 20.5909C80.5511 20.1364 79.7216 19.4886 79.733 18.3068C79.7216 16.9659 81.1761 16.0114 83.108 16.0114C85.2216 16.0114 86.1989 17.1818 86.5966 18.3523L89.6761 17.8068ZM97.1506 20.6364C97.1506 17.8523 98.9119 16.2614 101.332 16.2614C103.673 16.2614 105.071 17.75 105.071 20.3068V31H108.469V19.8977C108.469 15.5455 106.082 13.3182 102.491 13.3182C99.7756 13.3182 98.1392 14.5 97.321 16.3864H97.1051V7.72727H93.7528V31H97.1506V20.6364ZM119.537 31.3409C122.719 31.3409 123.969 29.3977 124.582 28.2841H124.866V31H128.185V7.72727H124.787V16.375H124.582C123.969 15.2955 122.81 13.3182 119.56 13.3182C115.344 13.3182 112.241 16.6477 112.241 22.3068C112.241 27.9545 115.298 31.3409 119.537 31.3409ZM120.287 28.4432C117.253 28.4432 115.673 25.7727 115.673 22.2727C115.673 18.8068 117.219 16.2045 120.287 16.2045C123.253 16.2045 124.844 18.625 124.844 22.2727C124.844 25.9432 123.219 28.4432 120.287 28.4432ZM138.114 31.3864C141 31.3864 142.625 29.9205 143.273 28.6136H143.409V31H146.727V19.4091C146.727 14.3295 142.727 13.3182 139.955 13.3182C136.795 13.3182 133.886 14.5909 132.75 17.7727L135.943 18.5C136.443 17.2614 137.716 16.0682 140 16.0682C142.193 16.0682 143.318 17.2159 143.318 19.1932V19.2727C143.318 20.5114 142.045 20.4886 138.909 20.8523C135.602 21.2386 132.216 22.1023 132.216 26.0682C132.216 29.5 134.795 31.3864 138.114 31.3864ZM138.852 28.6591C136.932 28.6591 135.545 27.7955 135.545 26.1136C135.545 24.2955 137.159 23.6477 139.125 23.3864C140.227 23.2386 142.841 22.9432 143.33 22.4545V24.7045C143.33 26.7727 141.682 28.6591 138.852 28.6591ZM164.332 17.8068C163.628 15.0909 161.503 13.3182 157.73 13.3182C153.787 13.3182 150.991 15.3977 150.991 18.4886C150.991 20.9659 152.491 22.6136 155.764 23.3409L158.719 23.9886C160.401 24.3636 161.185 25.1136 161.185 26.2045C161.185 27.5568 159.741 28.6136 157.514 28.6136C155.48 28.6136 154.173 27.7386 153.764 26.0227L150.48 26.5227C151.048 29.6136 153.616 31.3523 157.537 31.3523C161.753 31.3523 164.673 29.1136 164.673 25.9545C164.673 23.4886 163.105 21.9659 159.901 21.2273L157.128 20.5909C155.207 20.1364 154.378 19.4886 154.389 18.3068C154.378 16.9659 155.832 16.0114 157.764 16.0114C159.878 16.0114 160.855 17.1818 161.253 18.3523L164.332 17.8068ZM171.807 20.6364C171.807 17.8523 173.568 16.2614 175.989 16.2614C178.33 16.2614 179.727 17.75 179.727 20.3068V31H183.125V19.8977C183.125 15.5455 180.739 13.3182 177.148 13.3182C174.432 13.3182 172.795 14.5 171.977 16.3864H171.761V7.72727H168.409V31H171.807V20.6364Z" />
                <path d="M0 31L24 7V31H0Z" />
              </svg>
            </div>
            {/* <!-- logo - end --> */}

            {/* <!-- logo - start --> */}
            <div className="flex justify-center text-gray-400">
              <svg className="w-auto h-6 sm:h-8 lg:h-10" width="173" height="39" viewBox="0 0 173 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.2727 31C50.3636 31 54.6591 26.6136 54.6591 19.3409C54.6591 12.0909 50.3636 7.72727 43.3409 7.72727H35.0227V31H43.2727ZM39.9432 26.7841V11.9432H43.0795C47.4432 11.9432 49.75 14.1705 49.75 19.3409C49.75 24.5341 47.4432 26.7841 43.0682 26.7841H39.9432ZM63.1903 31.3295C65.7699 31.3295 67.4403 30.2045 68.2926 28.5795H68.429V31H73.0199V19.2273C73.0199 15.0682 69.4972 13.3182 65.6108 13.3182C61.429 13.3182 58.679 15.3182 58.0085 18.5L62.4858 18.8636C62.8153 17.7045 63.8494 16.8523 65.5881 16.8523C67.2358 16.8523 68.179 17.6818 68.179 19.1136V19.1818C68.179 20.3068 66.9858 20.4545 63.9517 20.75C60.4972 21.0682 57.3949 22.2273 57.3949 26.125C57.3949 29.5795 59.8608 31.3295 63.1903 31.3295ZM64.5767 27.9886C63.0881 27.9886 62.0199 27.2955 62.0199 25.9659C62.0199 24.6023 63.1449 23.9318 64.8494 23.6932C65.9062 23.5455 67.6335 23.2955 68.2131 22.9091V24.7614C68.2131 26.5909 66.7017 27.9886 64.5767 27.9886ZM86.0597 13.5455H82.7756V9.36364H77.9347V13.5455H75.5483V17.1818H77.9347V26.2727C77.9119 29.6932 80.2415 31.3864 83.7528 31.2386C85.0028 31.1932 85.8892 30.9432 86.3778 30.7841L85.6165 27.1818C85.3778 27.2273 84.8665 27.3409 84.4119 27.3409C83.446 27.3409 82.7756 26.9773 82.7756 25.6364V17.1818H86.0597V13.5455ZM94.1903 31.3295C96.7699 31.3295 98.4403 30.2045 99.2926 28.5795H99.429V31H104.02V19.2273C104.02 15.0682 100.497 13.3182 96.6108 13.3182C92.429 13.3182 89.679 15.3182 89.0085 18.5L93.4858 18.8636C93.8153 17.7045 94.8494 16.8523 96.5881 16.8523C98.2358 16.8523 99.179 17.6818 99.179 19.1136V19.1818C99.179 20.3068 97.9858 20.4545 94.9517 20.75C91.4972 21.0682 88.3949 22.2273 88.3949 26.125C88.3949 29.5795 90.8608 31.3295 94.1903 31.3295ZM95.5767 27.9886C94.0881 27.9886 93.0199 27.2955 93.0199 25.9659C93.0199 24.6023 94.1449 23.9318 95.8494 23.6932C96.9062 23.5455 98.6335 23.2955 99.2131 22.9091V24.7614C99.2131 26.5909 97.7017 27.9886 95.5767 27.9886ZM114.207 31.2841C117.026 31.2841 118.491 29.6591 119.162 28.2045H119.366V31H124.139V7.72727H119.31V16.4773H119.162C118.514 15.0568 117.116 13.3182 114.196 13.3182C110.366 13.3182 107.128 16.2955 107.128 22.2955C107.128 28.1364 110.23 31.2841 114.207 31.2841ZM115.741 27.4318C113.366 27.4318 112.071 25.3182 112.071 22.2727C112.071 19.25 113.344 17.1705 115.741 17.1705C118.094 17.1705 119.412 19.1591 119.412 22.2727C119.412 25.3864 118.071 27.4318 115.741 27.4318ZM128.119 31H132.96V21.125C132.96 18.9773 134.528 17.5 136.665 17.5C137.335 17.5 138.256 17.6136 138.71 17.7614V13.4659C138.278 13.3636 137.676 13.2955 137.188 13.2955C135.233 13.2955 133.631 14.4318 132.994 16.5909H132.812V13.5455H128.119V31ZM141.213 31H146.054V13.5455H141.213V31ZM143.645 11.2955C145.088 11.2955 146.27 10.1932 146.27 8.84091C146.27 7.5 145.088 6.39773 143.645 6.39773C142.213 6.39773 141.031 7.5 141.031 8.84091C141.031 10.1932 142.213 11.2955 143.645 11.2955ZM159.318 13.5455H155.852V12.375C155.852 11.1932 156.33 10.5 157.75 10.5C158.33 10.5 158.92 10.625 159.307 10.75L160.159 7.11364C159.557 6.93182 158.227 6.63636 156.739 6.63636C153.455 6.63636 151.011 8.48864 151.011 12.2841V13.5455H148.545V17.1818H151.011V31H155.852V17.1818H159.318V13.5455ZM171.56 13.5455H168.276V9.36364H163.435V13.5455H161.048V17.1818H163.435V26.2727C163.412 29.6932 165.741 31.3864 169.253 31.2386C170.503 31.1932 171.389 30.9432 171.878 30.7841L171.116 27.1818C170.878 27.2273 170.366 27.3409 169.912 27.3409C168.946 27.3409 168.276 26.9773 168.276 25.6364V17.1818H171.56V13.5455Z" />
                <rect y="26" width="24" height="5" />
                <rect x="9" y="17" width="15" height="5" />
              </svg>
            </div>
            {/* <!-- logo - end --> */}

            {/* <!-- logo - start --> */}
            <div className="flex justify-center text-gray-400">
              <svg className="w-auto h-6 sm:h-8 lg:h-10" width="146" height="39" viewBox="0 0 146 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.0909 7.72727V22.9091C55.0909 26.3182 52.75 28.7727 48.8636 28.7727C44.9773 28.7727 42.6364 26.3182 42.6364 22.9091V7.72727H39.8182V23.1364C39.8182 27.9091 43.3864 31.4091 48.8636 31.4091C54.3409 31.4091 57.9091 27.9091 57.9091 23.1364V7.72727H55.0909ZM63.1733 37.5455H65.8551V28.3182H66.0824C66.6733 29.2727 67.8097 31.3636 71.1733 31.3636C75.5369 31.3636 78.5824 27.8636 78.5824 22.3182C78.5824 16.8182 75.5369 13.3182 71.1278 13.3182C67.7188 13.3182 66.6733 15.4091 66.0824 16.3182H65.7642V13.5455H63.1733V37.5455ZM65.8097 22.2727C65.8097 18.3636 67.5369 15.7273 70.8097 15.7273C74.2188 15.7273 75.9006 18.5909 75.9006 22.2727C75.9006 26 74.1733 28.9545 70.8097 28.9545C67.5824 28.9545 65.8097 26.2273 65.8097 22.2727ZM90.2642 13.5455H86.5369V9.36364H83.8551V13.5455H81.2188V15.8182H83.8551V26.7273C83.8551 29.7727 86.3097 31.2273 88.5824 31.2273C89.5824 31.2273 90.2188 31.0455 90.5824 30.9091L90.0369 28.5C89.8097 28.5455 89.446 28.6364 88.8551 28.6364C87.6733 28.6364 86.5369 28.2727 86.5369 26V15.8182H90.2642V13.5455ZM94.2983 31H96.9801V13.5455H94.2983V31ZM95.6619 10.6364C96.7074 10.6364 97.571 9.81818 97.571 8.81818C97.571 7.81818 96.7074 7 95.6619 7C94.6165 7 93.7528 7.81818 93.7528 8.81818C93.7528 9.81818 94.6165 10.6364 95.6619 10.6364ZM101.892 31H104.574V20.0909C104.574 17.5341 106.438 15.7273 108.528 15.7273C110.562 15.7273 111.983 17.0568 111.983 19.0455V31H114.71V19.6364C114.71 17.3864 116.119 15.7273 118.574 15.7273C120.483 15.7273 122.119 16.7386 122.119 19.3182V31H124.801V19.3182C124.801 15.2159 122.597 13.3182 119.483 13.3182C116.983 13.3182 115.153 14.4659 114.256 16.2727H114.074C113.21 14.4091 111.688 13.3182 109.392 13.3182C107.119 13.3182 105.438 14.4091 104.71 16.2727H104.483V13.5455H101.892V31ZM137.023 31.3636C140.568 31.3636 143.159 29.5909 143.977 26.9545L141.386 26.2273C140.705 28.0455 139.125 28.9545 137.023 28.9545C133.875 28.9545 131.705 26.9205 131.58 23.1818H144.25V22.0455C144.25 15.5455 140.386 13.3182 136.75 13.3182C132.023 13.3182 128.886 17.0455 128.886 22.4091C128.886 27.7727 131.977 31.3636 137.023 31.3636ZM131.58 20.8636C131.761 18.1477 133.682 15.7273 136.75 15.7273C139.659 15.7273 141.523 17.9091 141.523 20.8636H131.58Z" />
                <path d="M16 6L29.8564 30H2.14359L16 6Z" />
              </svg>
            </div>
            {/* <!-- logo - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- logo cloud - end --> */}

      {/* <!-- stats - start --> */}
      <div id="stats" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our Team by the numbers</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x gap-8 md:gap-0">
            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">200</div>
              <div className="text-sm sm:text-base font-semibold">People</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm sm:text-base font-semibold">People</div>
            </div>

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
              <div className="text-sm sm:text-base font-semibold">Customers</div>
            </div>
            {/* <!-- stat - end --> */}

            {/* <!-- stat - start --> */}
            <div className="flex flex-col items-center md:p-4">
              <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
              <div className="text-sm sm:text-base font-semibold">Coffee breaks</div>
            </div>
            {/* <!-- stat - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- stats - end --> */}

      {/* <!-- team - start --> */}
      <div id="teams" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Meet our Team</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">John McCulling</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Founder / CEO</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Kate Berg</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">CFO</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Greg Jackson</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">CTO</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Robert Greyson</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Creative Director</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Elizeu Dias" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">John Roberts</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Investor Relations</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Matheus Ferrero" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Judy Amandez</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Senior Art Director</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Leilani Angel" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Rahul Williams</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Creative Director</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}

            {/* <!-- person - start --> */}
            <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
              <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                <img src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Jernej Graj" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <div className="text-indigo-500 md:text-lg font-bold text-center">Ari Ferris</div>
                <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Marketing Analyst</p>

                {/* <!-- social - start --> */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                      <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* <!-- social - end --> */}
              </div>
            </div>
            {/* <!-- person - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- team - end --> */}

      {/* <!-- testemonials - start --> */}
      <div id="testemonials" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">What others say about us</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 lg:divide-x">
            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" className="w-full h-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">John McCulling</div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CEO / Datadrift</p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}

            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">Kate Berg</div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CFO / Dashdash</p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}

            {/* <!-- quote - start --> */}
            <div className="flex flex-col items-center gap-4 md:gap-6 sm:px-4 lg:px-8">
              <div className="text-gray-600 text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>

              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 rounded-full overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" className="w-full h-full object-cover object-center" />
                </div>

                <div>
                  <div className="text-indigo-500 text-sm md:text-base font-bold text-center sm:text-left">Greg Jackson</div>
                  <p className="text-gray-500 text-sm md:text-sm text-center sm:text-left">CTO / Uptime</p>
                </div>
              </div>
            </div>
            {/* <!-- quote - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- testemonials - end --> */}

      {/* <!-- newsletter - start --> */}
      <div id="newsletter" className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 sm:p-8">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center">Get the latest updates</h2>
              <p className="text-gray-500 text-center">Sign up for our newsletter</p>
            </div>

            <form className="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
              <input placeholder="Email" className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Send</button>
            </form>

            <p className="text-gray-400 text-xs text-center">By signing up to our newsletter you agree to our <a href="#" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Term of Service</a> and <a href="#" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
      {/* <!-- newsletter - end --> */}

      {/* <!-- footer - start --> */}
      <div id="footer" className="bg-gray-900">
        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              {/* <!-- logo - start --> */}
              <div className="lg:-mt-2 mb-4">
                <a href="/" className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
                 <svg x-comp="Wordmark" height="24" viewBox="0 0 659 165" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Remix Logo</title><path fill-rule="evenodd" clip-rule="evenodd" d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" fill="currentColor"></path><path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z" fill="currentColor"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="url(#paint0_linear)"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="currentColor"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="url(#paint1_linear)"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="currentColor"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="url(#paint2_linear)"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="currentColor"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="url(#paint3_linear)"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="currentColor"></path><defs><linearGradient id="paint0_linear" x1="591.052" y1="47.1035" x2="591.052" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="203.19" y1="44.0317" x2="203.19" y2="164.352" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="368.744" y1="44.0317" x2="368.744" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="499.172" y1="0" x2="499.172" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="currentColor" stop-opacity="0"></stop></linearGradient></defs></svg>
                </a>
              </div>
              {/* <!-- logo - end --> */}

              <p className="text-gray-400 sm:pr-8 mb-6">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

              {/* <!-- social - start --> */}
              <div className="flex gap-4">
                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a href="#" target="_blank" className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              {/* <!-- social - end --> */}
            </div>

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Products</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Overview</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Solutions</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Pricing</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Customers</a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Company</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Investor Relations</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Jobs</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Press</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Blog</a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Support</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Documentation</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Chat</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">FAQ</a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}

            {/* <!-- nav - start --> */}
            <div>
              <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Legal</div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</a>
                </div>
              </nav>
            </div>
            {/* <!-- nav - end --> */}
          </div>

          <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">© {date} - Exploring Remix. All rights reserved.</div>
        </footer>
      </div>
      {/* <!-- footer - end --> */}
    </div>
  );
}

