import React, { ReactNode, useEffect, useState } from 'react'
import { Events } from './events/events'


type PropsType ={
  dateToString:(date:any) => ReactNode
}
export const EventComponent:React.FC<PropsType> = ({dateToString}) => {
  const [wsChanel, setWsChanel] = useState<WebSocket | null>(null)

  useEffect(() => {
    let ws: WebSocket;
    const removeHandler = () => {
      setTimeout(createChanel, 3000)
      console.log('CLOSE WS');
    }

    function createChanel() {

      ws?.removeEventListener('close', removeHandler)
      ws?.close()

      ws = new WebSocket('wss://test.relabs.ru/event')
      setWsChanel(ws)
    }
    createChanel()

    return () => {
      ws.removeEventListener('close', removeHandler)
      ws.close()
    }

  }, [])
  
  return (
    <Events
    dateToString={dateToString}
    wsChanel={wsChanel}
    />
  )
}
