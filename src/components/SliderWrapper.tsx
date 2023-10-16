import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
    children?: any;
};

const SliderWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className="slider">
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 5, spaceBetween: 50 },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                mousewheel={true}
                modules={[Autoplay, Mousewheel]}
                className="mySwiper"
            >
                {!!children.length &&
                    children.map((item: any, index: number) => (
                        <SwiperSlide key={index}>{item}</SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};
export default SliderWrapper;
