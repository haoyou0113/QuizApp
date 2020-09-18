import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className='App'>
      <Layout className='layout'>
        <Content>
          <div className='site-layout-content'>
            <Quiz className='quiz' />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
