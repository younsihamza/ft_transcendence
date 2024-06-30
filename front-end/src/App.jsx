 
import FriendsBar from "./Components/FriendsBar"
import JoinPage from "./Components/jointernament/joinPage"
import LayoutOne from "./Layouts/LayoutOne"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  

  return (
    <BrowserRouter>
		<Routes>
			<Route element={<LayoutOne/>}>
					<Route path="/example1" element={<FriendsBar/>}/>
					<Route path="/ter" element={<JoinPage/>}/>
					/* here u w will add ur page component that has the friends bar */
			</Route>
		</Routes>
    </BrowserRouter>
  )
}

export default App
