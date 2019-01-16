import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ActionLink from './ActionLink'

const Container = styled.div`
  max-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 1000px) {
    height: 100%;
    padding-top: 25px;
    justify-content: center;
  }
`

const Header = styled.h2`
  font-size: 56px;
  font-weight: 900;
  color: ${props => props.color || 'black'};
  margin: 0;
  letter-spacing: 0;
`

const BodyText = styled.h4`
  font-size: 18px;
  font-weight: 300;
`

const TextContainer = ({
  accentColor,
  headerText,
  bodyText,
  actionText,
  actionLink
}) => (
  <Container>
    <Header color={accentColor}>{headerText}</Header>
    <BodyText>{bodyText}</BodyText>
    {actionText && (
      <ActionLink
        accentColor={accentColor}
        actionText={actionText}
        actionLink={actionLink}
      />
    )}
  </Container>
)

TextContainer.propTypes = {
  accentColor: PropTypes.string,
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  actionText: PropTypes.string,
  actionLink: PropTypes.string,
}

export default TextContainer
