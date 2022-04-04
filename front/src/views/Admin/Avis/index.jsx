import { Badge, Input ,List ,Skeleton,Avatar } from "antd"
import AdminLayout from "../../../layouts/adminLayouts/AdminLayout"
const { Search } = Input
export default () => {

    const onSearch = value => console.log(value);

    return (
        <>
            <div className="container">
                <AdminLayout>
                    <div style={{ display: "flex", alignItems: 'baseline' }} >
                        <h3>Avis</h3>
                        <Badge style={{ marginLeft: '10px' }} count={10} showZero />
                    </div>

                    <Search placeholder="input search text" onSearch={onSearch} enterButton />


                    <List
                        className="demo-loadmore-list"
                       
                        itemLayout="horizontal"
                     
                        dataSource={[]}
                        renderItem={item => (
                            <List.Item
                                actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.picture.large} />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                    <div>content</div>
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </AdminLayout>
            </div>
        </>
    )
}