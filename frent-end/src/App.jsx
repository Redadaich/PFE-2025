import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./components/Layout/NavBar";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import HomeLayout from "./components/Layout/HomeLayout";
import CoursesPage from "./pages/CoursesPage";
import CoursePage from "./pages/CoursePage";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import MyProfile from "./pages/MyProfile";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MyLearning from "./pages/MyLearning";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/myLearning" element={<MyLearning />} />
        </Route>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
