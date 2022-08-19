import React from 'react'
import { StoreItems } from './storeItems/storeItems'

export const StoreContainer:React.FC<{header:React.ReactElement,menu:React.ReactElement}> = ({header,menu}) => {

  const items = [
    {id:1,imageUrl:'https://kenigsmart.ru/upload/iblock/133/133c794b17092396c803af7e79aa77c9.png',currentPrice:96000,oldPrice:120000,brand:'Apple',model:'Смартфон Iphone 12 128GB',
    diagonal:'6.1"',screen:'2550x1254',display:'OLED'},
    {id:2,imageUrl:'https://kenigsmart.ru/upload/iblock/133/133c794b17092396c803af7e79aa77c9.png',currentPrice:96000,oldPrice:120000,brand:'Apple',model:'Смартфон Iphone 12 128GB',
    diagonal:'6.1"',screen:'2550x1254',display:'OLED'},
    {id:3,imageUrl:'https://kenigsmart.ru/upload/iblock/133/133c794b17092396c803af7e79aa77c9.png',currentPrice:96000,oldPrice:120000,brand:'Apple',model:'Смартфон Iphone 12 128GB',
    diagonal:'6.1"',screen:'2550x1254',display:'OLED'},
    {id:4,imageUrl:'https://kenigsmart.ru/upload/iblock/133/133c794b17092396c803af7e79aa77c9.png',currentPrice:96000,oldPrice:120000,brand:'Apple',model:'Смартфон Iphone 12 128GB',
    diagonal:'6.1"',screen:'2550x1254',display:'OLED'},
    {id:5,imageUrl:'https://kenigsmart.ru/upload/iblock/133/133c794b17092396c803af7e79aa77c9.png',currentPrice:96000,oldPrice:120000,brand:'Apple',model:'Смартфон Iphone 12 128GB',
    diagonal:'6.1"',screen:'2550x1254',display:'OLED'},
  
  ]
  return (
    <div style={{height:'100%',overflow:'hidden'}}>
      {header}
      {menu}
      <StoreItems
      items={items}
      />
    </div>
  )
}
