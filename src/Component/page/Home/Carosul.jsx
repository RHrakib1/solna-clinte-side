// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
import banner1 from '../../../assets/images/carousel1.jpg'
import banner2 from '../../../assets/images/carousel2.jpg'
import banner3 from '../../../assets/images/carousel3.jpg'

export default function Carosul() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <Slider img={banner1} text='Get Your Web Development Projects Done in minutes'></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img={banner2} text='Get Your Graphics Design Projects Done in minutes'></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img={banner3} text='Start Your Digital Marketing Compaigns up a running'></Slider>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
