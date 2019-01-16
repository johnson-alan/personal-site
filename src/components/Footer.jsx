import React from 'react'
import styled from 'styled-components'
import { FaArrowAltCircleUp, } from 'react-icons/fa'

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 90%;
  padding: 0 5% 5% 5%;
  margin-top: -5%;
  @supports(padding: max(0px)) {
    padding-top: max(5%, env(safe-area-inset-left));
    padding-right: max(5%, env(safe-area-inset-right));
    padding-bottom: 0;
    padding-left: max(5%, env(safe-area-inset-right));
  }
`

const UpArrow = styled(FaArrowAltCircleUp)`
  color: ${props => props.accentColor || 'black'};
  z-index: 3;
  cursor: pointer;
`

const BuiltWithText = styled.div`
  font-size: 12px;
  font-weight: 300;
  z-index: 3;
`

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.accentColor || 'black'};
`

export default ({ accentColor, scrollToHero }) => (
  <Footer>
    <UpArrow accentColor={accentColor} onClick={scrollToHero}/>
    <BuiltWithText>
      {`Built with Gatsby. `}
      <Link
        href={'https://github.com/allenhj/personal-site'}
        aria-label="GitHub Project"
        target="_blank"
        rel="noopener noreferrer"
        accentColor={accentColor}
      >
        {`View Source.`}
      </Link>
    </BuiltWithText>
  </Footer>
)
