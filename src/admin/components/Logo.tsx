import React from 'react'
import { useTheme } from 'payload/dist/admin/components/utilities/Theme'

import LogoDarkSrc from './assets/appily-logo-dark.svg'
import LogoLightSrc from './assets/appily-logo-light.svg'

interface Props {
  theme: string
}

const Logo: React.FC<Props> = () => {
  const { theme } = useTheme()
  const logoSrc = theme === 'light' ? LogoLightSrc : LogoDarkSrc
  return <img src={logoSrc} alt="Appily logo" />
}

export default Logo
