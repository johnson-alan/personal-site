import React, { Component } from 'react'
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

class LargeText extends Component {
  setupTextRef = ref => this.textRef = ref

  render = () => {
    const { accentColor, text, actionText, onChange } = this.props
    return (
      <TextContainer>
        <Text ref={this.setupTextRef}>{text}</Text>
        {actionText && (
          <ActionLink
            // ref={this.setupLinkRef}
            accentColor={accentColor}
            actionText={actionText}
            onChange={onChange}
          />
        )}
      </TextContainer>
    )
  }
}

LargeText.propTypes = {
  accentColor: PropTypes.string,
  text: PropTypes.string,
  actionText: PropTypes.string
}

export default LargeText
