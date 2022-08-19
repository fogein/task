import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css'
import { Layout } from 'antd';
import { BaseRouter } from './router/BaseRouter';
const { Content } = Layout;

const App:React.FC = () => {

  return (
    <Layout style={{height:'100%'}}>
      <Content style={{height:'100%'}}>
      <BaseRouter/>
      </Content>
    </Layout>
  );
}

export default App;
