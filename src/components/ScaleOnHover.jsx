import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${props =>
    props.containerChildren.map(
      child => `
      &:hover ${child} {
        transform: scale(1.1);
      }
    `
    )}
`

const ScaleOnHover = ({ children, containerChildren }) => (
  <Container containerChildren={containerChildren}>{children}</Container>
)

ScaleOnHover.propTypes = {
  /** containerChildren is an array of components to target on hover */
  containerChildren: PropTypes.array
}

export default ScaleOnHover
