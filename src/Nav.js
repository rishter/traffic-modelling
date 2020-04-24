import React from 'react'
import { Navbar, ProgressBar, Alignment } from '@blueprintjs/core'

const Nav = ({progress}) => {
  return (
    <Navbar fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT} style={{ width: "100%"}}>
        <Navbar.Heading>Traffic Model</Navbar.Heading>
        <Navbar.Divider />
        <ProgressBar animate={false} intent="success" stripes={false} value={progress} />
        <Navbar.Divider />
        Progress: {`${Math.round(progress*100, 2)}%`}
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav;
