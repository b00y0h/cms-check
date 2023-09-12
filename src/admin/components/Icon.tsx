import React from 'react'
import { useTheme } from 'payload/dist/admin/components/utilities/Theme'

import IconDarkSrc from '../../../assets/appily-icon-dark.svg'
import IconLightSrc from '../../../assets/appily-icon-light.svg'

interface Props {
  theme: string
}

const Icon: React.FC<Props> = () => {
  const { theme } = useTheme()
  const logoSrc = theme === 'light' ? IconLightSrc : IconDarkSrc
  return <img src={logoSrc} alt="Appily logo" />
}

export default Icon
