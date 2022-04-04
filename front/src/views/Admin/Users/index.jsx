import { Badge, Col, Input, Row } from "antd"
import User from "../../../components/User";
import AdminLayout from "../../../layouts/adminLayouts/AdminLayout"
const { Search } = Input;

export default () => {

  const onSearch = value => console.log(value);



  return (
    <>

      <div className="container">
        <AdminLayout>
          <div style={{ display: "flex", alignItems: 'baseline' }} >
            <h3>Utilisateurs</h3>
            <Badge style={{ marginLeft: '10px' }} count={10} showZero />
          </div>

          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <br />
          <br />
          <Row gutter={16} >

            <Col xs={24} sm={8} md={6} > <User /></Col>
            <Col xs={24} sm={8} md={6} > <User /></Col>
            <Col xs={24} sm={8} md={6} > <User /></Col>
          </Row>


        </AdminLayout>
      </div>
    </>
  )
}