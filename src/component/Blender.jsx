import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes, useParams, useRoutes } from 'react-router';
import Banner from './Banner';
import BannerChannel from './bannerVideo/BannerChannel';
import JwplayerVideo from './bannerVideo/JwplayerVideo';
import LandingPage from './LandingPage';


function Blender() {
  const mediaId = useSelector(state => state.mediaId.mediaid)

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
        <Route path={`/nextpage&query=${mediaId}`} element={<BannerChannel />} />
        <Route path={`/nextpage&query=${mediaId}/jwplayerpage&query=${mediaId}`} element={<JwplayerVideo />} />
      </Routes>

    </div>
  )
}

export default Blender