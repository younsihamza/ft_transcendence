import FriendsBar from "./Components/FriendsBar"
import TournamentJoin from "./pages/TournamentJoin"
import LayoutOne from "./Layouts/LayoutOne"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import PingPongGame from "./pages/pingpongGame"
// import './server.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutOne/>}>
          <Route path="/example1" element={<FriendsBar/>}/>
          <Route path="/tournament" element={<TournamentJoin/>}/>
          <Route path="/game" element={<PingPongGame/>}/>
          {/* here u will add ur page component that has the friends bar */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
