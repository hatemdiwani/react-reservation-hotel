import { Col, Row } from "antd"
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from 'antd';
const { SubMenu } = Menu;
export default () => {

    const handleClick = e => {
        console.log('click ', e);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="container">
                <Row>
                    <Col span={6} >
                        <div  >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar
                                    style={{ height: "100px", width: '100px' }}
                                    icon={<AntDesignOutlined />}
                                />
                            </div>
                        </div>

                        <Menu
                            onClick={handleClick}
                            style={{  marginTop: "20px" }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >

                            <Menu.Item key="1">Informations</Menu.Item>
                            <Menu.Item key="2">Réservations</Menu.Item>
                            <Menu.Item key="3">Favoris</Menu.Item>

                        </Menu>
                    </Col>
                    <Col style={{marginTop:"120px" , padding:'20px'}} span={18} >
                        <Form
                            name="basic"
                          
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            
                            <Form.Item
                               
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                               
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    )
}