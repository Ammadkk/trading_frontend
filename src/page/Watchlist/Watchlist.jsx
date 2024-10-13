import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { addItemToWatchlist, getUserWatchlist } from '@/State/Watchlist/Action'
import { existInWatchlist } from '@/utils/existInWatchlist'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Item } from '@radix-ui/react-navigation-menu'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Watchlist = () => {

  const {watchlist} = useSelector(store => store)

  const dispatch = useDispatch()
  const handleRemoveFromWatchlist=(value) => {console.log(value)
    dispatch(addItemToWatchlist({coinId: value,jwt: localStorage.getItem("jwt")}))
  }

  useEffect(()=>{
    dispatch(getUserWatchlist(localStorage.getItem("jwt")))
  },[])

  

  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Coin</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24hr</TableHead>
      <TableHead className="text-right">PRICE</TableHead>
      <TableHead className="text-right text-red-600">REMOVE</TableHead>


    </TableRow>
  </TableHeader>
  <TableBody>
    {watchlist.items.map((item,index)=> <TableRow key={index}>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className="-z-50 h-8 w-8 rounded-full">
            <AvatarImage src={item.image}/>
        </Avatar>
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.symbol}</TableCell>
      <TableCell>{item.total_volume}</TableCell>
      <TableCell>{item.market_cap}</TableCell>
      <TableCell>{item.price_change_percentage_24h}</TableCell>

      <TableCell className="text-right">${item.current_price}</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" onClick={()=> handleRemoveFromWatchlist(item.id)} size="icon" className="h-10 w-10">

          
          <BookmarkFilledIcon className="h-5 w-5"/>
        </Button>
      </TableCell>
    </TableRow>)}

  </TableBody>
</Table>
    </div>
  )
}

export default Watchlist