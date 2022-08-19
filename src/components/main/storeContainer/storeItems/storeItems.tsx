import React from 'react'
import { Item } from './item'

export type itemsType = {
  id: number
  imageUrl: string
  currentPrice: number
  oldPrice: number
  brand: string
  model: string
  diagonal: string
  screen: string
  display: string
}
type PropsType = {
  items: Array<itemsType>
}
export const StoreItems: React.FC<PropsType> = ({ items }) => {
  return (
    <div style={{display:'flex',
    flexWrap:'wrap'}}>
      {
        items.map((item) => {
          return (
            <Item key={item.id}
            item={item}
            />
          )
        })
      }
    </div>
  )
}
