import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, secondaryColor, textColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#fff'
        },
        secondary: {
            main: textColor,
            contrastText: '#fff'
        }
    }
})

export default theme;