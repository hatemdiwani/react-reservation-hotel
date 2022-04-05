import { Carousel } from 'antd';
import hotel1 from '../../assets/img/hotel1.jpg'
import hotel2 from '../../assets/img/hotel2.jpg'
import hotel3 from '../../assets/img/hotel3.jpg'
import './index.css'

export default () => {

    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        height : '500px'
    };

    return (
        <>
            <Carousel autoplay afterChange={onChange}>
                <div>
                    <img className='slider_item' src={hotel1} alt="" />
                </div>
                <div>
                    <img className='slider_item' src={hotel2} alt="" />
                </div>
                <div>
                    <img className='slider_item' src={hotel3} alt="" />
                </div>
               
            </Carousel>
        </>
    )
}