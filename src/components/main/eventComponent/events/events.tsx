import React, { ReactNode, useEffect, useState } from 'react'
import cls from '../../usersComponent/userComponent.module.css'

type EventsType = {
  ctime: any
  event: string
}
type PropsType = {
  dateToString:(date:any) => ReactNode
  wsChanel: WebSocket | null
}
export const Events: React.FC<PropsType> = ({ wsChanel ,dateToString}) => {
  const [events, setEvents] = useState<EventsType[]>([])

  useEffect(() => {
    const setMessageHadler = (e: MessageEvent) => {
      setEvents((prevMessages) => [...prevMessages, JSON.parse(e.data)])
    }
    wsChanel?.addEventListener('message', setMessageHadler)

    return () => {
      wsChanel?.removeEventListener('message', setMessageHadler)
      wsChanel?.close()
    }
  }, [wsChanel])


  return (
    <div style={{ height: '418px', overflowY: 'auto', }} >
      <table  className={cls.table}>
        <thead>
          <tr className={cls.tr}>
            <th colSpan={2} className={cls.th}>События</th>
          </tr>
        </thead>
        {
          events.map((e, index) => {
            return (
              <tbody key={index}>
                <tr className={cls.tr}>
                  <td className={cls.td}>{dateToString(e.ctime)}</td>
                  <td className={cls.td}>{e.event}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </div>
  )
}
