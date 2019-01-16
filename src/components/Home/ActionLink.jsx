import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaArrowAltCircleRight, FaArrowAltCircleDown } from 'react-icons/fa'

const ActionLinkContainer = styled.div`
  &:hover {
    cursor: ${props => props.clickable ? 'pointer' : 'auto'};
  }
`

const Link = styled.a`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  font-weight: 500;
  color: ${props => props.color || 'black'};
  &:visited {
    color: ${props => props.color || 'black'};
  }
`

const RightArrow = styled(FaArrowAltCircleRight)`
  padding-left: 5px;
`

const DownArrow = styled(FaArrowAltCircleDown)`
  padding-left: 5px;
`

const ActionLink = ({ accentColor, actionText, actionLink, onChange }) => (
  <ActionLinkContainer clickable={onChange || actionLink}>
    <Link
      color={accentColor}
      href={actionLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onChange}
    >
      {actionText}
      {actionLink && <RightArrow/>}
      {onChange && <DownArrow/>}
    </Link>
  </ActionLinkContainer>
)

ActionLink.propTypes = {
  accentColor: PropTypes.string,
  actionText: PropTypes.string,
  actionLink: PropTypes.string,
  arrowDown: PropTypes.bool,
}

export default ActionLink

