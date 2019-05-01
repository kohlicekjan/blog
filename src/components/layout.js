import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled from "@emotion/styled"

const SmallTitle = styled.h3`
  margin-top: 0;
`

const BigTitle = styled.h3`
  ${scale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const TitleLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <BigTitle>
          <TitleLink to={`/`}>
            {title}
          </TitleLink>
        </BigTitle>
      )
    } else {
      header = (
        <SmallTitle>
          <TitleLink to={`/`}>
            {title}
          </TitleLink>
        </SmallTitle>
      )
    }
    return (
      <Wrapper>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    )
  }
}

export default Layout
