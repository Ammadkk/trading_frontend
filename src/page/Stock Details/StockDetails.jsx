import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { BookmarkFilledIcon, DotFilledIcon } from '@radix-ui/react-icons'
import { BookmarkIcon, DonutIcon, DotIcon, DotSquareIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import TradingForm from './TradingForm'
import StockChart from '../Home/StockChart'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/State/Coin/Action'
import { store } from '@/State/Store'
import { addItemToWatchlist, getUserWatchlist } from '@/State/Watchlist/Action'
import { existInWatchlist } from '@/utils/existInWatchlist'
import Swal from 'sweetalert2';


const StockDetails = () => {

  const {coin,watchlist} = useSelector(store=>store)

  const dispatch = useDispatch()
  const {id} = useParams()

  // console.log("params",params)

  useEffect(()=>{
    dispatch(fetchCoinDetails({coinId:id,jwt:localStorage.getItem("jwt")}))
    dispatch(getUserWatchlist(localStorage.getItem("jwt")))

  },[id])

  const handleAddToWatchlist = () => {
    dispatch(addItemToWatchlist({coinId: coin.coinDetails?.id, jwt: localStorage.getItem("jwt")}))
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `${coin.coinDetails?.name} has been added to your watchlist!`,
          timer: 3000, // Auto close after 3 seconds
          showConfirmButton: false,
          background: '#333', // Customize based on your theme
          color: '#fff', // Text color for dark background
          iconColor: '#00ff00', // Optional: Customize the icon color
        });
      })
      .catch((error) => {
        console.error('Failed to add to watchlist:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Failed to add ${coin.coinDetails?.name} to your watchlist.`,
          timer: 3000, // Auto close after 3 seconds
          showConfirmButton: false,
          background: '#333',
          color: '#fff',
          iconColor: '#ff0000', // Optional: Customize the error icon color
        });
      });
  };

  return (
    <div className="p-t mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
            <AvatarImage src={coin.coinDetails?.image.large} />
          </Avatar>
          </div>
          
          {/* {coin.coinDetails && coin.coinDetails.image && (
  
)} */}

          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
              <DotFilledIcon className="text-gray-400"/>
              <p className="text-gray-400">{coin.coinDetails?.name}</p>

            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
              <p className="text-red-600">
                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>

            </div>
          </div>

        </div>
        <div className="flex items-center gap-5">
          <Button onClick={handleAddToWatchlist} className="flex items-center gap-2">
            {existInWatchlist(watchlist.items, coin.coinDetails) ? <BookmarkFilledIcon className="h-6 w-6"/>:
             <BookmarkIcon className="h-6 w-6"/>}
            
          </Button>
          <Dialog>
              <DialogTrigger className="mr-5">
                <Button size="lg">TRADE</Button>
              </DialogTrigger>
            
            <DialogContent>
              <DialogHeader>
              <DialogTitle className="text-center">
                Convert Your Cash To Crypto!
              </DialogTitle>
                
              </DialogHeader>
              <TradingForm/>
            </DialogContent>
          </Dialog>

        </div>

      </div>

      <div className="mt-2">
        <StockChart coinId={id}/>
      </div>

      

    </div>
  )
}

export default StockDetails
