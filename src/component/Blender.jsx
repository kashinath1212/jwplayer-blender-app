import React from 'react'
import { Route, Routes } from 'react-router';
import Banner from './Banner';
import BannerChannel from './bannerVideo/BannerChannel';
import JwplayerVideo from './bannerVideo/JwplayerVideo';
import LandingPage from './LandingPage';


function Blender() {

  const structureJson = [
    {
      type: "banner",
      containerType: "BannerSlider",
      playlistId: "JSKF03bk"
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Trending",
      playlistId: "dGSUzs9o"
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Favourites",
      playlistId: "xQaFzykq"
    },
  ];
  return (
    <div className='w-100' style={{ overflow: "hidden" }}>
      <Routes>
        <Route path='/' element={structureJson?.map((data, index) => {
          return data.type === 'banner' ?
            <Banner playlistId={data.playlistId} key={index} /> :
            <LandingPage playlistId={data.playlistId} key={index} />
        })} />
        <Route path='/nextpage' element={<BannerChannel />} />
        <Route path='/nextpage/jwplayer' element={<JwplayerVideo />} />
      </Routes>

    </div>
  )
}

export default Blender