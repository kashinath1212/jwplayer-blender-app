import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { getLandingApiId } from '../redux/landing/landingAction';

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
    const dispatch = useDispatch()
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
    console.log(data);

    useEffect(() => {
        getApi()
    }, [])

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
                {data?.map((item, index) => {
                    const words = new Array(item?.description)
                    const newWords = words[0].split(' ')
                    console.log(newWords.length);
                    return (
                        <div className='' key={index} onClick={() => navigate(`nextpage&query=${item.mediaid}`)}>
                            <div className='m-2' onClick={() => dispatch(getLandingApiId(item.mediaid))}>
                                <div className='_poster_1wg2e_15 card_div_img'>
                                    <div className='duration_box'>
                                        {item?.duration ? <span className='duration_display_time'>{Math.round(item?.duration / 60)}min</span> : <span className='duration_display_live'>live</span>}
                                        <div className='description_box'>
                                            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title={item?.description}>
                                                {newWords.map((des, i) => { console.log(i < 20 && (des = des + ' ')); return (i < 25 && (des = des + ' ') || i === 26 && (`.......`)) })}
                                            </span>
                                        </div>
                                    </div>
                                    <img src={item.image} alt="akdjfa" className='img-fluid w-100 rounded' />
                                </div>
                                <div className='_titleContainer_1wg2e_142'>
                                    <div className='_title_1wg2e_19'>{item.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>

        </div>
    )
}

export default Banner