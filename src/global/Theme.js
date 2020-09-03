import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import red from 'material-ui/colors/red'
import green from 'material-ui/colors/green'

export const theme = createMuiTheme({
  palette: createPalette({
    primary: red,
    accent: {
      ...green,
    },
  }),
  overrides: {
    MuiAppBar: {
      height: 70,
    },
  },
})
