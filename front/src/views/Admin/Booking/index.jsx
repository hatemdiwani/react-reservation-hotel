import { Badge, Input  , Table} from 'antd'
import AdminLayout from '../../../layouts/adminLayouts/AdminLayout'
const { Search } = Input;
export default () => {

    const onSearch = value => console.log(value);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <>
            <div className="container">
                <AdminLayout>
                    <div style={{ display: "flex", alignItems: 'baseline' }} >
                        <h3>Réservations</h3>
                        <Badge style={{ marginLeft: '10px' }} count={10} showZero />
                    </div>

                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <br />
                    <br />

                    <Table dataSource={[]} columns={columns} />
                </AdminLayout>
            </div>
        </>
    )
}