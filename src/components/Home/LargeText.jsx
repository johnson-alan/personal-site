import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ActionLink from './ActionLink'

const TextContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const Text = styled.h1`
  font-size: 37.5px;
  font-weight: 300;
  color: ${props => props.color || 'black'};
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 350px) {
    font-size: 22px;
    padding: 2em 0;
  }
`

const LargeText = ({ accentColor, text, actionText, onChange }) => (
  <TextContainer>
    <Text>{text}</Text>
    {actionText && (
      <ActionLink
        accentColor={accentColor}
        actionText={actionText}
        onChange={onChange}
      />
    )}
  </TextContainer>
)

LargeText.propTypes = {
  accentColor: PropTypes.string,
  text: PropTypes.string,
  actionText: PropTypes.string,
}

export default LargeText
