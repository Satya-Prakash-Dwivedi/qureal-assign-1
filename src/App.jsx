import React from 'react';
import { Layout, Typography, Divider } from 'antd';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className=' min-h[100vh] '>
      <Header className='bg-zinc-400'>
        <Title level={2} className='text-white py-2'>Post Manager</Title>
      </Header>
      <Content className='p-20 items-center'>
        <PostForm />
        <Divider />
        <PostList />
      </Content>
    </Layout>
  );
};

export default App;