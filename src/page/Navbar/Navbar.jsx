import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Avatar } from '@radix-ui/react-avatar'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const{auth} = useSelector(store=>store)
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">
              <DragHandleHorizontalIcon className='h-7 w-7'/>
            </Button>
          </SheetTrigger>
          
          <SheetContent 
            className="w-72 border-r-0 flex flex-col justify-items-center" 
            side="left">
            <SheetHeader className="min-h-[24px]">
              <SheetTitle>
                <div className='text-3xl flex justify-center items-center gap-2'>
                  <Avatar className="h-8 w-8 rounded-full overflow-hidden">
                  <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png"/>
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Zen</span>
                    <span>Trade</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* Sidebar is placed below the logo to avoid overlap */}
            <div className="flex-grow">
              <Sidebar />
            </div>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">
          Zen Trading
        </p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon/>
            <span>Search</span>
          </Button>

        </div>
      </div>
      <div>
        <Avatar className="h-8 w-8 rounded-full flex items-center justify-center">
          <AvatarFallback className="text-white bg-gray-600 h-full w-full rounded-full flex items-center justify-center">
            {auth.user?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar



// const Navbar = () => {
//   return (
//     <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0
//     left-0 right-0 flex justify-between items-center'>

//       <div className='flex items-center gap-3'>
//       <Sheet>
//   <SheetTrigger>
//     <Button variant="ghost" size="icon" className="rounded-full h-11 w-11">

//     <DragHandleHorizontalIcon className='h-7 w-7'/>
    
//     </Button>
    
//   </SheetTrigger>
//   <SheetContent 
//   className="w-72 border-r-0 flex flex-col justify-center"
//    side="left">
//     <SheetHeader>
//       <SheetTitle>
//         <div className='text-3xl flex justify-center items-center gap-2'>
//           <Avatar className="h-8 w-8 rounded-full overflow-hidden">
//             <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png"/>
//           </Avatar>
//           <div>
//             <span className="font-bold text-orange-700">Zen</span>
//             <span>Trade</span>
//           </div>
          
//         </div>
//       </SheetTitle>
      
//     </SheetHeader>
//     <Sidebar/>
//   </SheetContent>
// </Sheet>

//       </div>
      
//     </div>
//   )
// }

// export default Navbar