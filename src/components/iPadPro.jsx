import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ScaleOnHover from './ScaleOnHover'
import iPadProFrame from '../../static/Apple-iPadPro11.png'

const iPadProWidth = 850
const iPadProWidthSmall = 500
const iPadProBezels = iPadProWidth * 0.033
const iPadProBezelsSmall = iPadProWidthSmall * 0.031
const iPadProWidthResponsive = `${90}vw`
const iPadProHeightResponsive = `${90 * 3 / 4.33}vw` // based on 4.33:3 aspect ratio
const iPadProScreenWidthResponsive = '84.2vw' // 90 - 2 * repsonsive bezel width

const RelativeContainer = styled.div`
  width: ${iPadProWidth}px;
  height: 650px;
  position: relative;
  border-radius: ${iPadProWidth / 6.4}px;
  @media screen and (max-width: 1500px) {
    width: ${iPadProWidthSmall}px;
    height: 360px;
  }
  @media screen and (max-width: 1000px) {
    width: ${iPadProWidthResponsive};
    height: ${`calc(${iPadProHeightResponsive} + 5vh)`};
  }
`

const AbosluteImage = styled.img`
  position: absolute;
  transition: transform 300ms ease-in-out;
`

const IPadPro = styled(AbosluteImage)`
  width: ${iPadProWidth}px;
  top: 0px;
  left: 0px;
  z-index: 1;
  @media screen and (max-width: 1500px) {
    width: ${iPadProWidthSmall}px;
  }
  @media screen and (max-width: 1000px) {
    width: ${iPadProWidthResponsive};
  }
`

const ScreenImage = styled(AbosluteImage)`
  width: ${iPadProWidth - 2 * iPadProBezels }px;
  top: ${iPadProBezels}px;
  left: ${iPadProBezels}px;
  @media screen and (max-width: 1500px) {
    width: ${iPadProWidthSmall - 2 * iPadProBezelsSmall }px;
    top: ${iPadProBezelsSmall}px;
    left: ${iPadProBezelsSmall}px;
  }
  @media screen and (max-width: 1000px) {
    width: ${iPadProScreenWidthResponsive};
    top: 2.95vw;
    left: 2.95vw;
  }
`

const Video = styled.video`
  position: absolute;
  width: ${iPadProWidth - 2 * iPadProBezels}px;
  top: ${iPadProBezels}px;
  left: ${iPadProBezels}px;
  transition: transform 300ms ease-in-out;
  @media screen and (max-width: 1500px) {
    width: ${iPadProWidthSmall - 2 * iPadProBezelsSmall}px;
    top: ${iPadProBezelsSmall}px;
    left: ${iPadProBezelsSmall}px;
  }
  @media screen and (max-width: 1000px) {
    width: ${iPadProScreenWidthResponsive};
    top: 2.95vw;
    left: 2.95vw;
  }
`

const iPadPro = ({ singleImage, images, video }) => (
  <ScaleOnHover containerChildren={[IPadPro, ScreenImage, Video]}>
    <RelativeContainer>
      <IPadPro src={iPadProFrame} alt="iPadPro" />
      {singleImage && <ScreenImage src={singleImage} alt="iPadPro Content" />}
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

iPadPro.propTypes = {
  singleImage: PropTypes.string,
  images: PropTypes.array,
  video: PropTypes.string,
}

export default iPadPro
