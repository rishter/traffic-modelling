import React from 'react'
import { Navbar, ProgressBar, Alignment } from '@blueprintjs/core'
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const Nav = ({progress, incrementCurrentStep, decrementCurrentStep }) => {
  return (
    <Navbar fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT} style={{ width: "100%"}}>
        <Navbar.Heading>Traffic Modelling</Navbar.Heading>
        <Navbar.Divider />
        <Icon className="ico left"
          icon={IconNames.ARROW_LEFT}
          iconSize={Icon.SIZE_LARGE}
          intent={Intent.PRIMARY}
          onClick={decrementCurrentStep}
        />
        <Icon className="ico right"
          icon={IconNames.ARROW_RIGHT}
          iconSize={Icon.SIZE_LARGE}
          intent={Intent.PRIMARY}
          onClick={incrementCurrentStep}/>
        <Navbar.Divider />
        <ProgressBar animate={false} intent="success" stripes={false} value={progress} />
        <Navbar.Divider />
        Progress: {`${Math.round(progress*100, 2)}%`}
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav;
