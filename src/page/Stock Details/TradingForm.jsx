import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAssetDetails } from '@/State/Asset/Action'
import { payOrder } from '@/State/Order/Action'
import { getUserWallet } from '@/State/Wallet/Action'
import { DotFilledIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';


const TradingForm = () => {

    const [orderType,setorderType] = useState("BUY")
    const [amount,setAmount] = useState(0)
    const [quantity,setQuantity] = useState(0)
    const {coin,wallet,asset} = useSelector(store=>store)
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
      const amount = e.target.value;
      setAmount(amount)

      // Check if the entered amount is greater than available cash
      if (parseFloat(amount) > wallet.userWallet?.balance) {
        setErrorMessage("Insufficient Balance To Buy!");
    } else {
        setErrorMessage(""); // Clear error if amount is valid
    }

      const volume = calculateBuyCost (amount,
        coin.coinDetails.market_data.current_price.usd)

        setQuantity(volume)

    }

    const calculateBuyCost = (amount,price) => {
      let volume = amount/price

      let decimalPlaces = Math.max(2,price.toString().split(".")[0].length)

      return volume.toFixed(decimalPlaces)
    }

    useEffect(() =>{
      dispatch(getUserWallet(localStorage.getItem("jwt")))
      dispatch(getAssetDetails({coinId:coin.coinDetails.id ,jwt:localStorage.getItem("jwt")}))
    },[])

    
    const handleBuyCrypto = () => {
      dispatch(payOrder({
        jwt: localStorage.getItem("jwt"),
        amount,
        orderData: {
          coinId: coin.coinDetails?.id,
          quantity,
          orderType,
        }
      })).then(() => {
        Swal.fire({
          title: `${orderType === 'BUY' ? 'Purchase' : 'Sale'} Successful!`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          width: '350px',
          height:'800px',
          background: '#333', 
          color: '#fff', 
          iconColor: '#00ff00',
        });
      }).catch(() => {
        Swal.fire({
          title: `${orderType === 'BUY' ? 'Purchase' : 'Sale'} Failed!`,
          icon: 'error',
          timer: 2000,
          showConfirmButton: false,
          width: '350px',
          height:'800px',
          background: '#333', 
          color: '#fff', 
          iconColor: '#00ff00',
        });
      });
    };

    

  return (
    
    <div className="space-y-10 p-5">
        <div>
            <div className="flex gap-4 items-center justify-between">
                <Input className="py-7 focus:outline-none"
                placeholder="Enter amount.."
                onChange={handleChange}
                type="number"
                name="amount"
                />
                <div>
                    <p className="border text-2xl flex w-36 h-14
                    justify-center items-center rounded-md">{quantity}</p>
                </div>

            </div>
            {errorMessage && <h1 className="text-green-600 text-center pt-4">{errorMessage}</h1>}
            {/* {true && <h1 className="text-red-600 text-center pt-4">Insufficient Balance To Buy!</h1>} */}
        </div>

        <div className="flex gap-5 items-center">
          <Avatar>
            <AvatarImage src={coin.coinDetails?.image.large}/>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
              <DotFilledIcon className="text-gray-400"/>
              <p className="text-gray-400">{coin.coinDetails?.name}</p>

            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
              <p className="text-green-600">
                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>

            </div>
          </div>

        </div>

        <div className="flex items-center justify-between">
            <p>Order Type</p>
            <p>Market order</p>

        </div>
        <div className="flex justify-between items-center">
            <p>{orderType=="BUY" ? "Available Cash" : "Available Quantity"}</p>
            <p>{orderType=="BUY" ? "$"+wallet.userWallet?.balance : (asset.assetDetails?.quantity || 0)}</p>

        </div>

        <div>
            <Button onClick={handleBuyCrypto} 
                className={`w-full py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 
                ${orderType == "SELL" ? "bg-red-600 text-white" : ""}`}>
                {orderType}                
            </Button>

            <Button variant="links" className="w-full py-6 mt-3 text-xl rounded-lg shadow-lg transition-transform transform hover:scale-105" 
            onClick={()=> setorderType(orderType == "BUY" ? "SELL" : "BUY")}>

                {orderType=="BUY" ? "or Sell" : "or Buy"}
            </Button>
        </div>

    </div>
  )
}

export default TradingForm

// return (
//   <div className="space-y-10 p-5">
//     <div>
//       {/* Trading Form Content */}
//     </div>

//     <div className="space-y-10 p-5">
//       <div>
//         <div className="flex gap-4 items-center justify-between">
//           <Input className="py-7 focus:outline-none"
//             placeholder="Enter amount.."
//             onChange={handleChange}
//             type="number"
//             name="amount"
//           />
//           <div>
//             <p className="border text-2xl flex w-36 h-12 justify-center items-center rounded-md">{quantity}</p>
//           </div>
//         </div>
//         {errorMessage && <h1 className="text-green-600 text-center pt-4">{errorMessage}</h1>}
//       </div>

//       <div className="flex gap-5 items-center">
//         <Avatar>
//           <AvatarImage src={coin.coinDetails?.image.large} />
//         </Avatar>
//         <div>
//           <div className="flex items-center gap-2">
//             <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
//             <DotFilledIcon className="text-gray-400" />
//             <p className="text-gray-400">{coin.coinDetails?.name}</p>
//           </div>
//           <div className="flex items-end gap-2">
//             <p className="text-xl font-bold">${coin.coinDetails?.market_data.current_price.usd}</p>
//             <p className="text-green-600">
//               <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
//               <span>({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between">
//         <p>Order Type</p>
//         <p>Market order</p>
//       </div>
//       <div className="flex justify-between items-center">
//         <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>
//         <p>{orderType === "BUY" ? "$" + wallet.userWallet?.balance : (asset.assetDetails?.quantity || 0)}</p>
//       </div>

//       <div>
//         <Button onClick={handleBuyCrypto}
//           className={`w-full py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 
//           ${orderType === "SELL" ? "bg-red-600 text-white" : ""}`}>
//           {orderType}
//         </Button>

//         <Button variant="links" className="w-full py-6 mt-3 text-xl rounded-lg shadow-lg transition-transform transform hover:scale-105"
//           onClick={() => setorderType(orderType === "BUY" ? "SELL" : "BUY")}>
//           {orderType === "BUY" ? "or Sell" : "or Buy"}
//         </Button>
//       </div>
//     </div>
//   </div>
// );
// };

// export default TradingForm;


