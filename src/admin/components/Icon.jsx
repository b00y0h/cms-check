import { useTheme } from 'payload/dist/admin/components/utilities/Theme'

import IconDarkSrc from './assets/appily-icon-dark.svg'
import IconLightSrc from './assets/appily-icon-light.svg'

const Icon = () => {
  const { theme } = useTheme()
  const logoSrc = theme === 'light' ? IconLightSrc : IconDarkSrc
  return <img src={logoSrc} alt="Appily logo" />
}

export default Icon
