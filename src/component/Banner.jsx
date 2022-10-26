import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "15px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "15px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}



function Banner(props) {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const getApi = async () => {
        try {
            const res = await axios.get(`https://cdn.jwplayer.com/v2/playlists/${props.playlistId}`);
            const data1 = res.data.playlist;
            setData(data1);
        } catch (error) {
            console.error(error);
        }

    }
    const dataHandler = (item) => {
        localStorage.setItem("banner", JSON.stringify(item))
    }

    useEffect(() => {
        getApi()
    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1.66,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }


    return (
        <div className='pb-5 pt-1'>
            <Slider {...settings} className="">
                {data?.map((item, index) => (
                    // console.log(item.image);
                    <div className='' key={index} onClick={() => navigate(`nextpage`)}>
                        <div className='m-2' onClick={() => dataHandler(item)}>
                            <div className='_poster_1wg2e_15 card_div_img'>
                                <img src={item.image} alt="akdjfa" className='img-fluid w-100 rounded' />
                            </div>
                            <div className='_titleContainer_1wg2e_142'>
                                <div className='_title_1wg2e_19'>{item.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    )
}

export default Banner