import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import Layout from "./Layout";

const theme = extendTheme({
  palette: {
    primary: {
      main: '#F8485E'      
    },
    secondary: {
      main: "#EEEEEE"
    }
  },
  typography: {
    fontFamily: 'QuickSand',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontWeightRegular: 700
  }
})
function App() {
  return (
    <CssVarsProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </CssVarsProvider>
  );
}

export default App;
