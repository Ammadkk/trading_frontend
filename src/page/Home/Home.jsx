

// import { Button } from '@/components/ui/button'
// import React, { useEffect } from 'react'
// import AssetTable from './AssetTable'
// import StockChart from './StockChart'
// import { Avatar } from '@radix-ui/react-avatar'
// import { AvatarImage } from '@/components/ui/avatar'
// import { DotIcon } from '@radix-ui/react-icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { store } from '@/State/Store'
// import { useParams } from 'react-router-dom'
// import { fetchCoinDetails, getCoinList, getTop50CoinList } from '@/State/Coin/Action'

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
//   PaginationEllipsis,
// } from '@/components/ui/pagination'

// const Home = () => {
//   const [category, setCategory] = React.useState('all')
//   const [inputValue, setInputValue] = React.useState('')
//   const [currentPage, setCurrentPage] = React.useState(1) // Current page state
//   const { coin } = useSelector((store) => store)
//   const dispatch = useDispatch()
//   const { id } = useParams()

//   // Handle category change
//   const handleCategory = (value) => {
//     setCategory(value)
//   }

//   // Handle input change
//   const handleChange = (e) => {
//     setInputValue(e.target.value)
//   }

//   // Handle Enter key press for input
//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       console.log(inputValue)
//     }
//     setInputValue('')
//   }

//   // Fetch coin list for current page
//   useEffect(() => {
//     dispatch(getCoinList(currentPage)) // Fetch coins for current page
//   }, [currentPage])

//   // Fetch top 50 coin list
//   useEffect(() => {
//     if (category === 'top50') {
//       dispatch(getTop50CoinList())
//     }
//   }, [category])

//   // Fetch coin details for the selected coin
//   useEffect(() => {
//     if (id) {
//       dispatch(fetchCoinDetails({ coinId: id, jwt: localStorage.getItem('jwt') }))
//     }
//   }, [id])

//   // Handle Next page click
//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1)
//   }

//   // Handle Previous page click
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1)
//     }
//   }

//   return (
//     <div className="relative">
//       <div className="lg:flex">
//         <div className="lg:w-[50%] lg:border-r">
//           <div className="p-3 flex items-center gap-3">
//             <Button
//               onClick={() => handleCategory('all')}
//               variant={category === 'all' ? 'default' : 'outline'}
//               className="rounded-full"
//             >
//               All
//             </Button>

//             <Button
//               onClick={() => handleCategory('top50')}
//               variant={category === 'top50' ? 'default' : 'outline'}
//               className="rounded-full"
//             >
//               Top 50
//             </Button>
//           </div>

//           <AssetTable coin={category === 'all' ? coin.coinList : coin.top50} category={category} />

//           <div>
//             {/* Pagination component */}
//             <Pagination>
//               <PaginationContent>
//                 <PaginationItem>
//                   <PaginationPrevious
//                     href="#"
//                     onClick={handlePreviousPage}
//                     disabled={currentPage === 1}
//                   />
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationLink href="#">{currentPage}</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationEllipsis />
//                 </PaginationItem>
//                 <PaginationItem>
//                   <PaginationNext href="#" onClick={handleNextPage} />
//                 </PaginationItem>
//               </PaginationContent>
//             </Pagination>
//           </div>
//         </div>

//         <div className="hidden lg:block w-[50%] p-5">
//           <StockChart coinId={'bitcoin'} />
//           <div className="flex gap-5 items-center">
//             <div>
//               <Avatar className="h-10 w-10 flex items-center">
//                 <AvatarImage src={coin.coinDetails?.image.large} />
                
//               </Avatar>
//             </div>
//             <div>
//               <div className="flex items-center gap-2">
//                 <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
//                 <DotIcon className="text-gray-400" />
//                 <p className="text-gray-400">{coin.coinDetails?.name}</p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
//                 <p className="text-red-600">
//                   <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
//                   <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home





import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { DotIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails, getCoinList, getTop50CoinList } from '@/State/Coin/Action'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination'

const Home = () => {
  const [category, setCategory] = useState('all')
  const [inputValue, setInputValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1) // Current page state
  const [selectedCoinId, setSelectedCoinId] = useState('bitcoin') // Default to bitcoin
  const { coin } = useSelector((store) => store)
  const dispatch = useDispatch()
  const { id } = useParams()

  // Handle category change
  const handleCategory = (value) => {
    setCategory(value)
  }

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  // Handle Enter key press for input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(inputValue)
    }
    setInputValue('')
  }

  // Fetch coin list for current page
  useEffect(() => {
    dispatch(getCoinList(currentPage)) // Fetch coins for current page
  }, [currentPage])

  // Fetch top 50 coin list
  useEffect(() => {
    if (category === 'top50') {
      dispatch(getTop50CoinList())
    }
  }, [category])

  // Fetch coin details for the selected coin or the default (bitcoin)
  useEffect(() => {
    const coinIdToFetch = id || selectedCoinId
    dispatch(fetchCoinDetails({ coinId: coinIdToFetch, jwt: localStorage.getItem('jwt') }))
  }, [id, selectedCoinId])

  // Handle Next page click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  // Handle Previous page click
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-3">
            <Button
              onClick={() => handleCategory('all')}
              variant={category === 'all' ? 'default' : 'outline'}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory('top50')}
              variant={category === 'top50' ? 'default' : 'outline'}
              className="rounded-full"
            >
              Top 50
            </Button>
          </div>

          <AssetTable
            coin={category === 'all' ? coin.coinList : coin.top50}
            category={category}
            setSelectedCoinId={setSelectedCoinId} // Set selected coin when clicked in AssetTable
          />

          <div>
            {/* Pagination component */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={handleNextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className="hidden lg:block w-[50%] p-5">
          <StockChart coinId={selectedCoinId || 'bitcoin'} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar className="h-10 w-10 flex items-center">
                <AvatarImage src={coin.coinDetails?.image.large} />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">{coin.coinDetails?.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
                <p className="text-red-600">
                  <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                  <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


