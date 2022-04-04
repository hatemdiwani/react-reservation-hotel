import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

export default () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const history = useHistory()

    return (
        <>
            <div className="container">
                <Row>

                    <Col xs={{ span: 24 }} sm={{ span: 20, offset: 2 }} md={{ span: 8, offset: 8 }} >
                        <h3>Se connecter</h3>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button style={{ marginRight: "15px" }} type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a onClick={() => history.push('/register')} >register now!</a>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </div>
        </>
    )
}