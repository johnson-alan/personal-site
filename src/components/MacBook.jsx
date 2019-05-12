import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ScaleOnHover from './ScaleOnHover'
import MacBookImage from '../../static/Apple-MacBook.png'

const MacBookWidth = 1000
const MacBookWidthSmall = 600
const MacBookScreenWidth = 780
const MacBookScreenWidthSmall = 464
const MacBookWidthResponsive = `${90}vw`
const MacBookHeightResponsive = `${90 * 0.5847}vw` // based on aspect ratio including case
const MacBookScreenWidthResponsive = '70vw' // 90 - 2 * repsonsive bezel width

const RelativeContainer = styled.div`
  width: ${MacBookWidth}px;
  height: 400px;
  position: relative;
  @media screen and (max-width: 1500px) {
    width: ${MacBookWidthSmall}px;
    height: 350px;
  }
  @media screen and (max-width: 1000px) {
    width: ${MacBookWidthResponsive};
    height: ${`calc(${MacBookHeightResponsive} + 5vh)`};
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
  @media screen and (max-width: 1500px) {
    width: ${MacBookWidthSmall}px;
  }
  @media screen and (max-width: 1000px) {
    width: ${MacBookWidthResponsive};
  }
`

const ScreenImage = styled(AbosluteImage)`
  width: ${MacBookScreenWidth}px;
  top: 32px;
  left: 110px;
  @media screen and (max-width: 1500px) {
    width: ${MacBookScreenWidthSmall}px;
    top: 19px;
    left: 69px;
  }
  @media screen and (max-width: 1000px) {
    width: ${MacBookScreenWidthResponsive};
    top: 2.95vw;
    left: 10vw;
  }
`

// @TODO: absolute offsets not adapted yet
const Video = styled.video`
  position: absolute;
  width: ${MacBookScreenWidth}px;
  top: 22px;
  left: 81px;
  transition: transform 300ms ease-in-out;
  @media screen and (max-width: 1500px) {
    width: ${MacBookScreenWidthSmall}px;
    top: 12px;
    left: 43px;
  }
  @media screen and (max-width: 1000px) {
    width: ${MacBookScreenWidthResponsive};
    top: 12px;
    left: 43px;
  }
`

const iPhone = ({ singleImage, images, video }) => (
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
)

iPhone.propTypes = {
  singleImage: PropTypes.string,
  images: PropTypes.array,
  video: PropTypes.string,
}

export default iPhone
