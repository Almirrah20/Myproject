
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import './women.css';
import Navwomen from '../Navwomen.js';
import Weddingw1 from './Weddingw.js';
import Bridalss from './Bridals.js';
import Meetingg from './Meeting.js';
import Partyy from './Party.js';
import Brunchh from './Brunch.js';
import Casuall from './Casual.js';



export default function Women() {


  return (
    <Router>
      <Navwomen />
      <Switch>
      <Route path="/" exact component={Weddingw1} />
      <Route path="/Bridals" component={Bridalss} />
      <Route path="/Meeting" component={Meetingg} />
      <Route path="/Party" component={Partyy} />
      <Route path="/Brunch" component={Brunchh} />
      <Route path="/Casual" component={Casuall} />
      </Switch>
    </Router>
  );
}
