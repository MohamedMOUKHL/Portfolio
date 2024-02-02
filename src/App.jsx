import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import {Home, About, Contact, Projects} from "./pages"


// Declare Home component before using it


const App = () => {
    return (
        <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </Router>
        </>
    );
};

export default App;
