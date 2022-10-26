import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "15px", top: "80px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "15px", top: "80px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function LandingPage(props) {
    const [data, setData] = useState()
    const navigate = useNavigate()
    const getApi = async () => {
        try {
            const res = await axios.get(`https://cdn.jwplayer.com/v2/playlists/${props.playlistId}`);
            const data = res.data.playlist;
            // console.log(data);
            setData(data);
        } catch (error) {
            console.error(error);
        }

    }
    const dataHandler = (item) => {
        localStorage.setItem("banner", JSON.stringify(item))
    }
    useEffect(() => {
        getApi()
    }, [])
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5.3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <div>
            <Slider {...settings} className="">
                {data?.map((item, index) => (
                    < div className='kashi' key={index} onClick={() => navigate(`nextpage`)}>
                        <div className='m-2 ' onClick={() => dataHandler(item)}>
                            <div className='card_div_img'>
                                <div className='_poster_1wg2e_15'>
                                    <img src={item.image} alt="akdjfa" className='img-fluid rounded' />
                                </div>
                            </div>
                            <div className='_titleContainer_1wg2e_142'>
                                <div className='_title_1wg2e_19'>{item.title}</div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider >

        </div >
    )
}

export default LandingPage