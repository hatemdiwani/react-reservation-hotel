import { Col, DatePicker, Row, Select, Tag } from 'antd';
import './index.css'
import { Menu, Dropdown, Button } from 'antd';

const { Option } = Select;

export default () => {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function onChange(date, dateString) {
        console.log(date, dateString);
    }


    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>

            <Row>
                <Col  >
                    <div className="hotels_filter">
                        <h4>Chercher</h4>
                        <Select className="mt-10" defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                            <Option value="jack"> <i class="las la-street-view"></i> Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <DatePicker className="mt-10" style={{ width: '100%' }} onChange={onChange} />
                        <DatePicker className="mt-10" style={{ width: '100%' }} onChange={onChange} />
                        <Tag className="mt-10" style={{ width: '100%' }} color="gold"> Nuitées 2</Tag>

                        <Dropdown className="mt-10" style={{ width: '100%' }} overlay={menu} placement="bottom" arrow>
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <i class="las la-bed"></i>
                                <span>Chambres et occupation</span>
                            </div>
                        </Dropdown>
                    </div>

                </Col>
            </Row>
        </>
    )
}