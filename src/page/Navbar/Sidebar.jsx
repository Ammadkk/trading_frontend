import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import { logout } from '@/State/Auth/Action'
import { ActivityLogIcon, BookmarkIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons'
import { Item } from '@radix-ui/react-navigation-menu'
import { CreditCard, CreditCardIcon, LandmarkIcon, WalletIcon } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const menu=[
    {name:"Home",path:"/",icon:<HomeIcon className='h-6 w-6'/>},

    {
        name:"Portfolio",
        path:"/portfolio",
        icon:<DashboardIcon className='h-6 w-6'/>,
    },

    {
        name:"Watchlist",
        path:"/watchlist",
        icon:<BookmarkIcon className='h-6 w-6'/>,
    },

    {
        name:"Activity",
        path:"/activity",
        icon:<ActivityLogIcon className='h-6 w-6'/>,
    },

    {
        name:"Wallet",
        path:"/wallet",
        icon:<WalletIcon className='h-6 w-6'/>,
    },

    {
        name:"Payment Details",
        path:"/payment-details",
        icon:<LandmarkIcon className='h-6 w-6'/>,
    },

    {
        name:"Withdrawal",
        path:"/withdrawal-icon",
        icon:<CreditCardIcon className='h-6 w-6'/>,
    },

    {
        name:"Profile",
        path:"/profile",
        icon:<PersonIcon className='h-6 w-6'/>,
    },


    {name:"Logout",path:"/",icon:<ExitIcon className='h-6 w-6'/>}
]

const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handlelogout=()=>{
        dispatch(logout())
    }

  return (
    <div className='mt-8 space-y-4'>
        {menu.map((item) => (
            <div key={item.name}>
                <SheetClose className="w-full">
            <Button onClick={() => {

                navigate(item.path)
                if (item.name=="Logout")
                    handlelogout()
            }}
             variant="outline" className="flex items-center gap-5 py-5 w-full">
                <span className='w-8'>{item.icon}</span>
                <p>{item.name}</p> 
            </Button>
            </SheetClose>

            </div>
        ))}

    </div>
  );
}

export default Sidebar