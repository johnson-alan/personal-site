import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ScaleOnHover from './ScaleOnHover'

const StyledImage = styled.img`
  max-width: 100%;
  transition: transform 300ms ease-in-out;
  border-radius: ${props => props.rounded ? '50%' : 0 };
  @media (max-width: 1000px) {
    height: 100%;
    padding-bottom: 5vh;
  }
`

const Image = ({ src, alt, width, height, rounded }) => (
  <ScaleOnHover containerChildren={[StyledImage]}>
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      rounded={rounded}
    />
  </ScaleOnHover>
)

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  rounded: PropTypes.bool,
}

export default Image
