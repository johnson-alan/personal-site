import React from 'react'
import styled from 'styled-components'
import { FaRegFileAlt, FaGithubAlt, FaLinkedinIn, FaAt } from 'react-icons/fa'

const resumeURI =
  'https://www.dropbox.com/s/0w0je8irxro5rqz/Allen%20Johnson%20Resume%202019.pdf?dl=0'
const linkedInURI = 'https://www.linkedin.com/in/allen-h-johnson/'
const githubURI = 'https://github.com/allenhj'
const mailToURI = 'mailto:allendotjohnson@gmail.com'

const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 90%;
  padding: 5% 5% 0 5%;
  z-index: 3;
  @supports(padding: max(0px)) {
    padding-top: max(5%, env(safe-area-inset-left));
    padding-right: max(5%, env(safe-area-inset-right));
    padding-bottom: 0;
    padding-left: max(5%, env(safe-area-inset-right));
  }
`

const Logo = styled.div`
  font-weight: 700;
  font-size: 18px;
`

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

const NavLink = styled.a`
  padding-left: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 300;
  color: black;
  &:visited {
    color: black;
  }
  &:hover {
    opacity: 0.2;
  }
`

export default () => (
  <Header>
    <Logo>Allen Johnson</Logo>
    <Nav>
      <NavLink
        href={resumeURI}
        aria-label="Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFileAlt />
      </NavLink>
      <NavLink
        href={githubURI}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubAlt />
      </NavLink>
      <NavLink
        href={linkedInURI}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </NavLink>
      <NavLink
        href={mailToURI}
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaAt />
      </NavLink>
    </Nav>
  </Header>
)
