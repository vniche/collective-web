import { Layout, Card } from "antd";
import { Collective } from "./features/collective";
import { HeartFilled as Heart } from "@ant-design/icons";
import './App.css';

const { Content, Footer } = Layout;

function App() {

  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Card>
            <Collective />
          </Card>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>made with <Heart/> by <a href={"https://github.com/vniche"} target="_blank" rel="noopener noreferrer">vniche</a> + <a href={"https://github.com/matbrito"} target="_blank" rel="noopener noreferrer">matbrito</a></Footer>
    </Layout>
  );
}

export default App;
