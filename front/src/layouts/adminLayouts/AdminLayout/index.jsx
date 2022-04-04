import { Layout } from 'antd';

import { Menu } from 'antd';
import {UserOutlined ,BookOutlined ,AreaChartOutlined,CommentOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

export default ({ children }) => {

    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <>
            <Layout>

                <Layout>
                    <Sider style={{ background: 'white' }} >
                        <Menu
                            onClick={handleClick}
                            /* style={{ width: 256 }} */
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item icon={<AreaChartOutlined />} key="1">Statitics</Menu.Item>
                            <Menu.Item icon={<UserOutlined />} key="2">Utilisateurs</Menu.Item>
                            <Menu.Item icon={<BookOutlined />} key="3">Réservations</Menu.Item>
                            <Menu.Item icon={<CommentOutlined />} key="4">Avis</Menu.Item>


                        </Menu>
                    </Sider>
                    <Content style={{background:'white' , padding:'0px 20px'}} >{children}</Content>
                </Layout>

            </Layout>
        </>
    )
}