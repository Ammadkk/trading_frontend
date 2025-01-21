// import { AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
// import { getWithdrawalHistory } from '@/State/Withdrawal/Action'
// import { Avatar } from '@radix-ui/react-avatar'
// import { BookmarkFilledIcon } from '@radix-ui/react-icons'
// import { Item } from '@radix-ui/react-navigation-menu'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'



// const Withdrawal = () => {
//   const dispatch = useDispatch()
//   const {wallet,withdrawal} = useSelector(store => store)

//   useEffect(()=> {
//     dispatch(getWithdrawalHistory(localStorage.getItem("jwt")))

//   },[])


//   return (
//     <div className="p-5 lg:px-20">
//       <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
//       <Table className="border">
//   {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
//   <TableHeader>
//     <TableRow>
//       <TableHead className="py-5">Date</TableHead>
//       <TableHead>Method</TableHead>
//       <TableHead>Amount</TableHead>
//       <TableHead className="text-right">Status</TableHead>


//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {withdrawal.history.map((item,index)=> <TableRow key={index}>
//         <TableCell>
//         <p>{new Date(item.date).toLocaleDateString()}</p>
//         </TableCell>
//       <TableCell>Bank</TableCell>
//       <TableCell>${item.amount}</TableCell>
//       <TableCell className="text-right">{item.status}</TableCell>
//     </TableRow>)}

//   </TableBody>
// </Table>
//     </div>
//   )
// }

// export default Withdrawal

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getWithdrawalHistory } from '@/State/Withdrawal/Action';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Withdrawal = () => {
  const dispatch = useDispatch();
  const { withdrawal } = useSelector(store => store);

  useEffect(() => {
    dispatch(getWithdrawalHistory(localStorage.getItem('jwt')));
  }, []);

  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5 text-white">Withdrawal</h1>
      <Table className="border border-gray-600 shadow-lg rounded-lg overflow-hidden bg-gray-800">
        <TableHeader>
          <TableRow className="bg-gray-700 text-center">
            <TableHead className="py-5 text-white font-semibold w-1/4">Date</TableHead>
            <TableHead className="text-white font-semibold w-1/4">Method</TableHead>
            <TableHead className="text-white font-semibold w-1/6">Amount</TableHead>
            <TableHead className="text-white text-right font-semibold w-1/6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawal.history.map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-600 transition-all duration-200 border-b border-gray-700"
            >
              <TableCell className="py-3 text-gray-200">
                <p>{new Date(item.date).toLocaleDateString()}</p>
              </TableCell>
              <TableCell className="py-3 text-gray-200">Bank</TableCell>
              <TableCell className="py-3 text-gray-200 w-1/6">${item.amount}</TableCell>
              <TableCell className="text-right py-3 w-1/6">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    item.status === 'Pending'
                      ? 'bg-yellow-500 text-yellow-900'
                      : item.status === 'Completed'
                      ? 'bg-green-500 text-green-900'
                      : 'bg-orange-600 text-white'
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
