import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ViewPortContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 5vw;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10vh 5vw;
    height: 100%;
  }
  @media (max-width: 1000px) and (orientation: landscape) {
    padding: 10vw 5vh;
  }
`

ViewPortContainer.defaultProps = {
  gradientStart: 'rgb(255, 254, 252)',
  gradientEnd: 'rgb(255, 254, 252)'
}

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props =>
  `linear-gradient(180deg, ${props.gradientStart} 0%, ${
    props.gradientEnd
  } 50.28%)`};
  z-index: 1;
  opacity: 0.5;
`

const ContentContainer = styled.div`
  flex: 1;
  min-height: ${props => props.image ? '500px' : 0};
  z-index: 2;
  @media (max-width: 1000px) {
    min-height: 0;
  }
`

class Hero extends Component {
  static propTypes = {
    children: PropTypes.array,
    setRef: PropTypes.func,
    gradientStart: PropTypes.string,
    gradientEnd: PropTypes.string,
  }

  // componentDidMount = () => {
  //   const { setRef } = this.props
  //   if (setRef) setRef()
  // }

  render = () => {
    const { children, gradientStart, gradientEnd, setRef } = this.props
    return (
      <ViewPortContainer ref={setRef}>
        <GradientOverlay gradientStart={gradientStart} gradientEnd={gradientEnd}/>
        {Children.map(children, (child, idx) =>
          <ContentContainer image={idx % 2 === 0}>{child}</ContentContainer>
        )}
      </ViewPortContainer>
    )
  }
}

export default Hero
