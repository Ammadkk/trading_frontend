import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { Cross1Icon, DotIcon } from '@radix-ui/react-icons'
import { MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { getCoinList, getTop50CoinList } from '@/State/Coin/Action'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/State/Store'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/State/Coin/Action'



import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const Home = () => {
    const[category,setCategory] = React.useState("all")
    const[inputValue,setInputValue] = React.useState("");
    // const[isBotRelease,setIsBotRelease] = React.useState(false);
    const {coin} = useSelector(store => store)
    const dispatch = useDispatch()
    const {id} = useParams()

    // const handleBotRelease = () => setIsBotRelease(!isBotRelease);

    const handleCategory = (value) => {
        setCategory(value)
    };

    const handleChange = (e) => {

        setInputValue(e.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key=="Enter") {
            console.log(inputValue)
        }
        setInputValue("")
    }

    useEffect(()=> {
        dispatch(getCoinList(1))
    },[])


    useEffect(()=>{
        dispatch(getTop50CoinList())

    },[category])



    useEffect(()=>{
        dispatch(fetchCoinDetails({coinId:id,jwt:localStorage.getItem("jwt")}))
        console.log("Coin details:", coin.coinDetails);
        // dispatch(getUserWatchlist(localStorage.getItem("jwt")))
    
      },[id])

    
  return (
    <div className='relative'>

        <div className="lg:flex">
            <div className="lg:w-[50%] lg:border-r">
                <div className="p-3 flex items-center gap-3">

                    <Button onClick={()=>handleCategory("all")}
                    variant={category=="all" ? "default": "outline"} 
                    className="rounded-full"
                    >
                    All
                    </Button>

                    <Button onClick={()=>handleCategory("top50")}
                    variant={category=="top50" ? "default": "outline"} 
                    className="rounded-full"
                    >
                    Top 50
                    </Button>

                    {/* <Button onClick={()=>handleCategory("topGainers")}
                    variant={category=="topGainers" ? "default": "outline"} 
                    className="rounded-full"
                    >
                    Top Gainers
                    </Button>

                    <Button onClick={()=>handleCategory("topLosers")}
                    variant={category=="topLosers" ? "default": "outline"} 
                    className="rounded-full"
                    >
                    Top Losers
                    </Button> */}


                </div>
                <AssetTable coin={category=="all"?coin.coinList:coin.top50} category={category}/>
                <div>
                <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

                </div>
            </div>
            <div className="hidden lg:block w-[50%] p-5">
                <StockChart coinId={"bitcoin"}/>
                <div className="flex gap-5 items-center">
                    <div>
                        <Avatar className="h-8 w-8 flex items-center">
                            {/* <AvatarImage src={"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"}/> */}
                            <AvatarImage src={coin.coinDetails?.image.large}/>
                        </Avatar>
                    </div>
                    <div>
                    <div className="flex items-center gap-2">
                        <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
                        <DotIcon className="text-gray-400"/>
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
        {/* <section className="absolute border-5 right-5 z-40 flex flex-col justify-end items-end bottom-4">

            {isBotRelease&& <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
                <div className="flex justify-between items-center border-b px-6 h-[12%]">
                <p>Chat Bot</p>
                <Button onClick={handleBotRelease} variant="ghost" size="icon">
                    <Cross1Icon/>
                </Button>
                </div>

                <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-4 py-2 scroll-container">

                    <div className="self-start pb-5 w-auto"> 
                        <div className="justify-end self-end px-4 py-2 rounded-md bg-slate-800 w-auto">
                        <p>Hey, Ammad K</p>
                        <p>If you have any concerns regarding crypto, ask!</p>
                        <p>You can start with price,market cap...</p>
                        </div>

                    </div>

                    {
                        [1,1,1,1,1].map((item,i)=> <div key={i} 
                        className={` ${ i%2 == 0 ?"self-start":"self-end"} "pb-5 w-auto"`}> 
                        {i%2==0? <div className="justify-end self-end px-4 py-2 rounded-md bg-slate-800 w-auto">
                        <p>Prompt</p>
                        </div> : <div className="justify-end self-end px-4 py-2 rounded-md bg-slate-800 w-auto">
                        <p>Answer</p>
                        </div>}
                                              

                    </div>)
                    }

                    
                </div>
                <div className="h-[12%] border-t">
                    <Input className="w-full h-full order-none outline-none"
                    placeholder="write prompt"
                    onChange={handleChange}
                    value={inputValue}
                    onKeyPress={handleKeyPress}/>

                </div>


            </div>}



            <div className="relative w-[10rem] cursor-pointer group">
                <Button
                onClick={handleBotRelease}
                className="w-full h-[3rem] items-center gap-1">
                    <MessageCircle size={30} className="fill-[#1e293b] -rotate-90 stroke-none
                     group-hover:fill-white"/>
                    <span className="text-xl">Chat Bot</span>

                </Button>

            </div>

        </section> */}
        
    </div>
  )
}

export default Home