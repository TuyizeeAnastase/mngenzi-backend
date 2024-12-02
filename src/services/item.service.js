import {Item} from '../database/models'

export const addItem=async(item)=>{
    return await Item.create(item)
}