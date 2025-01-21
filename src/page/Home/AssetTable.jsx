import { AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import { Item } from '@radix-ui/react-navigation-menu'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AssetTable = ({coin,category}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  

  return (
    <Table>
      <ScrollArea className={`${category=="all"?"h-[72vh]":"h-[82vh]"}`}>
        <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24hr</TableHead>
      <TableHead className="text-right">PRICE</TableHead>


    </TableRow>
  </TableHeader>
  <TableBody>
    {coin.map((item,index)=> <TableRow key={item.id}>
      <TableCell onClick={()=> navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
        {/* <Avatar className="-z-50">
            <AvatarImage src={item.image} className="w-8 h-8 rounded-full"/>
        </Avatar> */}
        <Avatar className="w-8 h-8">
                  <AvatarImage 
                    src={item.image} 
                    alt={`${item.name} logo`} 
                    className="object-contain w-full h-full rounded-full" 
                  />
                </Avatar>
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.symbol}</TableCell>
      <TableCell>{item.total_volume}</TableCell>
      <TableCell>{item.market_cap}</TableCell>
      <TableCell>{item.price_change_percentage_24h}</TableCell>
      {/* <TableCell>
      {item.price_change_percentage_24h !== null && item.price_change_percentage_24h !== undefined ? item.price_change_percentage_24h : 'N/A'}
      </TableCell> */}
{/*  */}
      <TableCell className="text-right">${item.current_price}</TableCell>
    </TableRow>)}

  </TableBody>
      </ScrollArea>
  
</Table>

  )
}

export default AssetTable