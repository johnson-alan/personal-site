import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ScaleOnHover from './ScaleOnHover'
import MacBookImage from '../../static/Apple-MacBook.png'

const MacBookWidth = 700
const MacBookWidthResponsive = 372
const MacBookScreenWidth = 542
const MacBookScreenWidthResponsive = 288

const ResponsiveContainer = styled.div`
  @media screen and (max-width: 1210px) and (min-width: 1000px) {
    padding-top: 80px;
  }
`

const RelativeContainer = styled.div`
  width: ${MacBookWidth}px;
  height: 400px;
  position: relative;
  @media screen and (max-width: 1210px) {
    width: ${MacBookWidthResponsive}px;
    height: 250px;
  }
`

const AbosluteImage = styled.img`
  position: absolute;
  transition: transform 300ms ease-in-out;
`

const MacBook = styled(AbosluteImage)`
  width: ${MacBookWidth}px;
  top: 0px;
  left: 0px;
  z-index: 1;
  @media screen and (max-width: 1210px) {
    width: ${MacBookWidthResponsive}px;
  }
`

const ScreenImage = styled(AbosluteImage)`
  width: ${MacBookScreenWidth}px;
  top: 22px;
  left: 81px;
  @media screen and (max-width: 1210px) {
    width: ${MacBookScreenWidthResponsive}px;
    top: 12px;
    left: 43px;
  }
`

const Video = styled.video`
  position: absolute;
  width: ${MacBookScreenWidth}px;
  top: 22px;
  left: 81px;
  transition: transform 300ms ease-in-out;
  @media screen and (max-width: 1210px) {
    width: ${MacBookScreenWidthResponsive}px;
    top: 12px;
    left: 43px;
  }
`

const iPhone = ({ singleImage, images, video }) => (
  <ResponsiveContainer>
  <ScaleOnHover containerChildren={[MacBook, ScreenImage, Video]}>
    <RelativeContainer>
      <MacBook src={MacBookImage} alt="iPhone" />
      {singleImage && <ScreenImage src={singleImage} alt="iPhone Content" />}
      {images && null} {/* TODO: add Carousel */}
      {video && (
        <Video autoPlay muted playsInline loop>
          {/* <source src={video} type="video/webm" /> */}
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      )}
    </RelativeContainer>
  </ScaleOnHover>
  </ResponsiveContainer>
)

iPhone.propTypes = {
  singleImage: PropTypes.string,
  images: PropTypes.array,
  video: PropTypes.string,
}

export default iPhone
