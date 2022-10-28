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
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getApi = async () => {
        try {
            const res = await axios.get(`https://cdn.jwplayer.com/v2/playlists/${props.playlistId}`);
            const data = res.data.playlist;
            setData(data);
        } catch (error) {
            console.error(error);
        }

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
                {data?.map((item, index) => {
                    const words = new Array(item?.description)
                    const newWords = words[0].split(' ')
                    return (
                        < div className='kashi' key={index} onClick={() => navigate(`nextpage&query=${item.mediaid}`)}>
                            <div className='m-2 ' onClick={() => dispatch(getLandingApiId(item.mediaid))}>
                                <div className='card_div_img'>
                                    <div className='_poster_1wg2e_15'>
                                        <div className='duration_box'>
                                            {item?.duration ? <span className='duration_display_time'>{Math.round(item?.duration / 60)}min</span> : <span className='duration_display_time'>Series</span>}
                                            <div className='description_box landing_box'>
                                                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={item?.description}>
                                                    {newWords.map((des, i) => i < 13 && (des = des + ' ') || i === 26 && (`.......`))}
                                                </span>
                                            </div>
                                        </div>
                                        <img src={item.image} alt="akdjfa" className='img-fluid rounded' />
                                    </div>
                                </div>
                                <div className='_titleContainer_1wg2e_142'>
                                    <div className='_title_1wg2e_19'>{item.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider >

        </div >
    )
}

export default LandingPage