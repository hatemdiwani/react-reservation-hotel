import { Col, Row } from "antd"
import HotelCard from "../../components/HotelCard"
import HotelsFilter from "../../components/HotelsFilter"

export default () => {
    return (
        <>
            <div className="container">
                <Row>
                    <Col span={4} >
                        <HotelsFilter />

                    </Col>
                    <Col span={20} >
                        <div className="blog-area blog-padding">
                            <div className="container">
                            
                                <div className="row">
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                    <HotelCard />
                                </div>
                            </div>

                        </div>

                    </Col>
                </Row>
            </div>

        </>
    )
}