/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'



function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <img src="/public/LeaseNFT_Logo_v1.png" alt="Logo" class="h-8 w-8 mr-2" />
      <nav className="bg-logo border-b p-6 bg-white shadow-lg ">
        <div className="flex items-cener shrink-0">
          <span className="font-bold text-gray-500 text-5xl">
            LeaseNFT320
          </span>
        </div>
        <p className="mt-3 font-bold text-3xl text-gray-500"></p>
        <div className="hidden md:flex items-center mt-6  justify-right">
          <Link href="/">
            <a className="mr-20 text-blue-500 font-bold hover:text-purple-500 transition duration-300">
              Lease
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-20 text-blue-500 font-bold hover:text-purple-500 transition duration-300 ">
              Add-NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-20 text-blue-500 font-bold hover:text-purple-500 transition duration-300">
              Borrower Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-20 text-blue-500 font-bold hover:text-purple-500 transition duration-300">
              Lender Assets
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace
