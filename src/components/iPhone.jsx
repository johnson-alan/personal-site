import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ScaleOnHover from './ScaleOnHover'
import iPhoneImage from '../../static/Apple-iPhone-XS.png'

const iPhoneWidth = 300
const iPhoneBezels = iPhoneWidth * 0.06

const RelativeContainer = styled.div`
  width: ${iPhoneWidth}px;
  height: ${iPhoneWidth * 2}px;
  position: relative;
  border-radius: ${iPhoneWidth / 6.4}px;
  @media screen and (max-width: 1000px) {
    height: ${`calc(${iPhoneWidth * 2}px + 5vh)`};
  }
`

const AbosluteImage = styled.img`
  position: absolute;
  transition: transform 300ms ease-in-out;
`

const IPhone = styled(AbosluteImage)`
  width: ${iPhoneWidth}px;
  top: 0px;
  left: 0px;
  z-index: 1;
`

const ScreenImage = styled(AbosluteImage)`
  width: ${iPhoneWidth - 2 * iPhoneBezels}px;
  top: ${iPhoneBezels - 2}px;
  left: ${iPhoneBezels}px;
`

const Video = styled.video`
  position: absolute;
  width: ${iPhoneWidth - 2 * iPhoneBezels}px;
  top: ${iPhoneBezels - 2}px;
  left: ${iPhoneBezels}px;
  transition: transform 300ms ease-in-out;
`

const iPhone = ({ singleImage, images, video }) => (
  <ScaleOnHover containerChildren={[IPhone, ScreenImage, Video]}>
    <RelativeContainer>
      <IPhone src={iPhoneImage} alt="iPhone" />
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
