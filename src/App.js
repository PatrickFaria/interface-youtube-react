import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';

import Home from './Home'

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: indigo[500],
      }
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
