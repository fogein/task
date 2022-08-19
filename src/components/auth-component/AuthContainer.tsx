import React, { useEffect, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import cls from './AuthContainer.module.css'
import { actions, loginThunk } from './../../store/reducers/AuthReducer';
import { useTypedDispatch, useTypedSelector } from './../../store/store';
import { useNavigate } from 'react-router-dom';
type PropsType = {

}
type valuesType = {
  email: string,
  password: string
}

export const AuthContainer: React.FC<PropsType> = () => {

  const [butDis, setButDis] = useState(false)
  const navigate = useNavigate()
  const authLoader = useTypedSelector((state) => state.auth.authLoader)
  const dispatch = useTypedDispatch()
  const onFinish = (data: valuesType) => {
    dispatch(loginThunk(data))
    setButDis(true)
  };

useEffect(() => {
 if (!!authLoader) {
  return navigate('/')
 }
 return () => {
  dispatch(actions.authLoader(false))
}
}, [authLoader, dispatch, navigate])



  return (
    <div className={cls.container}>
      <div className={cls.formContainer}>
        <Form
        disabled={!!butDis}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password,' },
            { whitespace: true, message: 'there cant be a space here' },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: 'Check spaces,min length is 8, password must have 1 capital letter and 1 small letter' },
            { transform: (value: string) => value.replaceAll(' ', '') }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type={'password'}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button loading={!!butDis} type="primary" block={true} htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
