import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaArrowAltCircleUp, } from 'react-icons/fa'

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 90%;
  padding: 0 5% 5% 5%;
  margin-top: -5%;
  @supports(padding: max(0px)) {
    padding-top: 0;
    padding-right: max(5%, env(safe-area-inset-right));
    padding-bottom: max(5%, env(safe-area-inset-left));
    padding-left: max(5%, env(safe-area-inset-right));
  }
`

const UpArrow = styled(FaArrowAltCircleUp)`
  color: ${props => props.color || 'black'};
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

const Footer = ({ accentColor, scrollToHero }) => (
  <StyledFooter>
    <UpArrow color={accentColor} onClick={scrollToHero}/>
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
  </StyledFooter>
)

Footer.propTypes = {
  accentColor: PropTypes.string,
  scrollToHero: PropTypes.func,
}

export default Footer
