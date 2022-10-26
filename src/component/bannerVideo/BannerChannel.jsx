import React from 'react'
import { useNavigate } from 'react-router';

function BannerChannel() {

    const navigate = useNavigate()
    const mainData = localStorage.getItem("banner")
    const data = JSON.parse(mainData)
    const mediaIdHandler = (item) => {
        localStorage.setItem("mediaId", item)
    }

    return (
        <div className='text-white d-flex flex-column align-items-start justify-content-start m-5'>
            <div className='text-start w-75'>
                <div className='text-start w-75 mb-5'>
                    <h1 className='mb-1'>{data?.title}</h1>
                    <div className='mb-2'>
                        <span className='mx-1 ms-0'>2019</span>
                        <span className='mx-1 '>8m</span>
                        <span className='mx-1'>Fantasy</span>
                        <span className='mx-1'>CC-BY</span>
                    </div>
                    <div>
                        {data?.description}
                    </div>
                </div>
                <div className='py-5'>
                    <button className='btn btn-primary px-5 me-2' onClick={() => { return (navigate(`jwplayer`), mediaIdHandler(data?.mediaid)) }}>Start Watching</button>
                    <button className='btn btn-secondary mx-2 px-4'>Favorite</button>
                    <button className='btn btn-secondary mx-2 px-4'>Share</button>
                </div>
            </div>
            <div style={{position: 'fixed', zIndex: "-1", top: "0px"}}>
                <img src={data?.image} alt={data?.image} className="vh-100 w-100" style={{filter: 'blur(5px) brightness(100%)' ,objectFit: 'cover'}}/>
            </div>
        </div>
    )
}

export default BannerChannel