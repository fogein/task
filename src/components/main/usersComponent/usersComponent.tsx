import { Button } from 'antd'
import React, { ReactNode, useState } from 'react'
import { actions, getUsersThunk, UserItem } from '../../../store/reducers/UsersReducer'
import cls from './userComponent.module.css'
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import { useTypedDispatch } from '../../../store/store';

type PropsType = {
  users: Array<UserItem>
  total: number
  limit: number
  dateToString:(date:any) => ReactNode
}

export const UsersComponent: React.FC<PropsType> =  ({ dateToString,users, total, limit }) => {

  const dispatch = useTypedDispatch()

  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
    dispatch(getUsersThunk(limit, page))
  };

  
  const onClickHandler = (id: number) => {
    dispatch(actions.onDeleteUserAC(id))
  }

  return (
    <div className={cls.container}>
      <table className={cls.table}>
        <thead>
          <tr className={cls.tr}>
            <th className={cls.th}>Id</th>
            <th className={cls.th}>Имя</th>
            <th className={cls.th}>Роль</th>
            <th className={cls.th}>Дата создания</th>
            <th className={cls.th}>Действия</th>
          </tr>
        </thead>
        {
          users.map((u) => {
            return (
              <tbody key={u.id}>
                <tr className={cls.tr}>
                  <td className={cls.td}>{u.id}</td>
                  <td className={cls.td}>{u.name}</td>
                  <td className={cls.td}>{u.role}</td>
                  <td className={cls.td}>{dateToString(u.ctime)}</td>
                  <td className={cls.td}><Button onClick={()=>onClickHandler(u.id)} type={'primary'} danger={true}>Удалить</Button></td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
      <Pagination style={{margin:'10px 0 0 10px'}} defaultPageSize={limit} current={current} onChange={onChange} total={total} />;
    </div>
  )
}
