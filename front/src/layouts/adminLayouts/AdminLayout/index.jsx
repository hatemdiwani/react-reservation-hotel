import { Layout } from 'antd';

import { Menu } from 'antd';
import { UserOutlined, BookOutlined, AreaChartOutlined, CommentOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import BreadCrumb from '../../../components/BreadCrumb';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

export default ({ children }) => {

    const handleClick = e => {
        console.log('click ', e);
    };

    const history = useHistory()

    const navigate = (path) => {
        history.push(path)
    }

    return (
        <>
            <BreadCrumb />
            <br />
            <br />
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
                            <Menu.Item onClick={() => navigate('/dashboard')} icon={<AreaChartOutlined />} key="1">Statitics</Menu.Item>
                            <Menu.Item onClick={() => navigate('/users')} icon={<UserOutlined />} key="2">Utilisateurs</Menu.Item>
                            <SubMenu key="sub1" icon={<BookOutlined />} title="Réservations">

                                <Menu.Item onClick={() => navigate('/booking')} key="3">List</Menu.Item>
                                <Menu.Item onClick={() => navigate('/addBooking')} key="4">Ajouter réservation</Menu.Item>


                            </SubMenu>

                            <Menu.Item onClick={() => navigate('/avis')} icon={<CommentOutlined />} key="6">Avis</Menu.Item>


                        </Menu>
                    </Sider>
                    <Content style={{ background: 'white', padding: '0px 20px' }} >

                        {children}

                    </Content>
                </Layout>

            </Layout>
        </>
    )
}