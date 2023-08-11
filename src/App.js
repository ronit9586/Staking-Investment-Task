import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './component/page/Home';
import Main from './component/page/Main';
import Register from './component/page/Register';
import Login from './component/page/Login';
import ForgetPassword from './component/page/ForgetPassword';
import Terms from './component/page/Terms';
import FQAs from './component/page/FQAs';
import ResetPassword from './component/page/ResetPassword';
import Steps from './component/page/Steps';
import ContactUs from './component/page/ContactUs';
import { UserProvider } from "./contexts/userProvider";
import { AffiliateProvider } from "./contexts/affiliateProvider";

function App() {

  return (
    <AffiliateProvider>
      <UserProvider>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} >
              <Route path=":userid/:wallet/:base58/" element={<Home />} />
            </Route>
            <Route path="/main" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword/:jxt" element={< ResetPassword />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/fqas" element={<FQAs />} />
            <Route path="/steps/:id" element={<Steps />} />
            <Route path="/contactus" element={<ContactUs />} />


          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AffiliateProvider>
  )
}

export default App;
