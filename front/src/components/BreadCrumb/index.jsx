import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom';

export default () => {

    const { url, path } = useRouteMatch()

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">

                    <span>Dashboard</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{url.split('/')[1]}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}