
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sliderImgs } from '../../utils/image';
function Headingslider() {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider className='slider' {...settings}>
            <div>
                <img src={sliderImgs[0]} alt="slider-img" />
            </div>
            <div>
                <img src={sliderImgs[1]} alt="slider-img" />
            </div>
        </Slider>

    )
}

export default Headingslider