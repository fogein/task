import React, { useState } from 'react'
import { itemsType } from './storeItems'
import cls from './item.module.css'
import { Button } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

type PropsType = {
  item: itemsType
}

export const Item: React.FC<PropsType> = ({ item }) => {
  const [isActive,setIsActive]=useState(false)
  return (

    <>
      <div className={cls.container} >
        <img className={cls.image} src={item.imageUrl} alt="" />
        <div className={cls.price}>
          <h3 style={{margin:0, color: '#800080' }}> {item.currentPrice.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
          </h3>
          <h5 style={{margin:'0px 0px 0px 10px', textDecoration: 'line-through', color: '#808080' }}>
            {item.oldPrice.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </h5>
        </div>

        <div className={cls.ratingArea}>
          <input type="radio" id="star-5" name="rating" value="5" />
          <label htmlFor="star-5" title="Оценка «5»"></label>
          <input type="radio" id="star-4" name="rating" value="4" />
          <label htmlFor="star-4" title="Оценка «4»"></label>
          <input type="radio" id="star-3" name="rating" value="3" />
          <label htmlFor="star-3" title="Оценка «3»"></label>
          <input type="radio" id="star-2" name="rating" value="2" />
          <label htmlFor="star-2" title="Оценка «2»"></label>
          <input type="radio" id="star-1" name="rating" value="1" />
          <label htmlFor="star-1" title="Оценка «1»"></label>
        </div>


        <div className={cls.description}>

          {item.brand}/{item.model}/{item.diagonal}/{item.screen}/{item.display}

        </div>

        <div>
          <Button>В корзину</Button>
          <HeartOutlined onClick={() => setIsActive(!isActive)} className={isActive?cls.iconActive:cls.icon} />
        </div>

      </div>
    </>

  )
}
