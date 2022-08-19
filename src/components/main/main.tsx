import React, { useEffect } from 'react'
import { getUsersThunk } from '../../store/reducers/UsersReducer';
import { useTypedDispatch, useTypedSelector } from './../../store/store';
import { EventComponent } from './eventComponent/EventComponent';
import { UsersComponent } from './usersComponent/usersComponent';

export const Main: React.FC<{header:React.ReactElement,menu:React.ReactElement}> = ({header,menu}) => {
  const dispatch = useTypedDispatch()

  const users = useTypedSelector((state) => state.users.users)
  const total = useTypedSelector((state) => state.users.total)
  const limit = useTypedSelector((state) => state.users.limit)

  useEffect(() => {
    dispatch(getUsersThunk(limit))
  }, [dispatch, limit])
  const dateToString: any = (date: any) => {

    let stringDate = new Date(date * 1000);
    let options: any = { day: 'numeric', year: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric' };
    return stringDate.toLocaleDateString("ru", options)

  }

  return (
    <div style={{height:'100vh'}} >
      {header}
      {menu}
      <div style={{ display: 'flex',width:'100%' }}>
        <div style={{width:'100%'}}>
          <UsersComponent
            users={users}
            total={total}
            limit={limit}
            dateToString={dateToString}
          />
        </div>
        <div style={{width:'100%'}}>
         <EventComponent 
         dateToString={dateToString}
         />
        </div>
      </div>
    </div>
  )
}
