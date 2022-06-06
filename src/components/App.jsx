import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import ContentForm from './ContentRoutes/ContentForm';
import HeaderForm from './HeaderComponent/HeaderForm';
import SiderContainer from './SiderPageComponent/SiderContainer';

export default function App() {
  const { Footer } = Layout;

  return (
    <div className="App">
      <Layout
        style={{
          minHeight: '100vh',
        }}>
        <SiderContainer />
        <Layout className="site-layout">
          <HeaderForm />
          <ContentForm />
          <Footer className='site-author'>
            ©2022 Kuzmin Alexander IVT-13-18
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

