import { AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAssets } from '@/State/Asset/Action'
import { useEffect } from 'react'


const Portfolio = () => {
  const dispatch = useDispatch()
  const {asset} = useSelector(store => store)

  useEffect(() => {
    dispatch(getUserAssets(localStorage.getItem("jwt")))
  }, [])

  return (
    <div className="p-5 lg:px-20 pb-5">
      <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50 h-8 w-8 rounded-full">
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.coin.price_change_24h}</TableCell>
              <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">{item.coin.total_volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Portfolio


{/* </TableHeader>
  <TableBody>
          {asset.userAssets && asset.userAssets.length > 0 ? (
            asset.userAssets.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50 h-8 w-8 rounded-full">
                    <AvatarImage src={item.coin.image} />
                  </Avatar>
                  <span>{item.coin.name}</span>
                </TableCell>
                <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.coin.price_change_24h}</TableCell>
                <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
                <TableCell className="text-right">{item.coin.total_volume}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="6" className="text-center">No assets found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
} */}

{/* export default Portfolio */}
