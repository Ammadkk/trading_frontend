import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getAllOrdersForUsers } from '@/State/Order/Action'
import { calculateProfit } from '@/utils/calculateProfit'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import { Item } from '@radix-ui/react-navigation-menu'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Activity = () => {
  const dispatch = useDispatch()
  const {order} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getAllOrdersForUsers({jwt:localStorage.getItem("jwt")}))
  }, [])
  
  
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Date & Time</TableHead>
      <TableHead>Trading Pair</TableHead>
      <TableHead>Buy Price</TableHead>
      <TableHead>Selling price</TableHead>
      <TableHead>Order Type</TableHead>
      <TableHead className="text-right">Profit/Loss</TableHead>
      <TableHead className="text-right">Value</TableHead>


    </TableRow>
  </TableHeader>
  <TableBody>
    {order.orders.map((item,index)=> <TableRow key={index}>
        <TableCell>
          <p>2024/8/27</p>
          <p className="text-gray-400">4:49:50</p>
        </TableCell>
        <TableCell className="font-medium flex items-center gap-2">
        <Avatar className="-z-50 h-8 w-8 rounded-full">
            <AvatarImage src={item.orderItem.coin.image}/>
        </Avatar>
        <span>{item.orderItem.coin.name}</span>
      </TableCell>
      <TableCell>{item.orderItem.buyPrice}</TableCell>
      <TableCell>{item.orderItem.sellPrice}</TableCell>
      <TableCell>{item.orderType}</TableCell>

      <TableCell className="text-right">{calculateProfit(item)}</TableCell>
      <TableCell className="text-right">{item.price}</TableCell>
    </TableRow>)}

  </TableBody>
</Table>
    </div>
  )
}

export default Activity