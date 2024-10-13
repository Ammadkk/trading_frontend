

import api from '@/config/api';
import * as types from './ActionType';


export const payOrder = ({jwt,orderData,amount}) => async(dispatch) => {
    dispatch({type: types.PAY_ORDER_REQUEST});

    try {
        const response = await api.post('/api/orders/pay', orderData,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({
            type: types.PAY_ORDER_SUCCESS,
            payload:response.data,
            amount
        })
        console.log("order success",response.data)

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        // console.log("error",error)
        dispatch({
            type: types.PAY_ORDER_FAILURE,
            error: error.message,
        })
        
    }
}

// export const getOrderById = ({jwt,orderId}) => async(dispatch) => {
//     dispatch({type: types.GET_ORDER_REQUEST});

//     try {
//         const response = await api.get(`/api/orders/${orderId}`, orderData{
//             headers: {
//                 Authorization: `Bearer ${jwt}`
//             }
//         })

//         dispatch({
//             type: types.GET_ORDER_SUCCESS,
//             payload:response.data,
//             amount
//         })
//         console.log("order success",response.data)

//     } catch (error) {
//         console.log("error",error)
//         dispatch({
//             type: types.GET_ORDER_FAILURE,
//             error: error.message,
//         })
        
//     }
// }

export const getAllOrdersForUsers = ({jwt,orderType,assetSymbol}) => async(dispatch) => {
    dispatch({type: types.GET_ALL_ORDERS_REQUEST});

    try {
        const response = await api.get('/api/orders',{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({
            type: types.GET_ALL_ORDERS_SUCCESS,
            payload:response.data,
            
        })
        console.log("order success",response.data)

    } catch (error) {

        console.log("error",error)
        dispatch({
            type: types.GET_ALL_ORDERS_FAILURE,
            error: error.message,
        })
        
    }
}