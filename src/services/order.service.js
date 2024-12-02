import {Order} from '../database/models'

export const addOrder=async(order)=>{
    return await Order.create(order)
}