import "./App.css";
// import WorkSpace from "./Components/WorkSpace";
import Banner from "./Components/Banner";
// import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Lms from "./Components/Lms";
import Main from "./Components/Main";
// import SavedPage from "./Components/SavedPage";
// import SignUp from "./Components/SignUp";
// import Testimonials from "./Components/Testimonials";
import Tools from "./Components/Tools";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Features />
      <Tools />
      <Lms />
      {/* <Testimonials /> */}
      <Banner />
      {/* <Contact /> */}
      {/* <SignUp/> */}
      {/* <SavedPage /> */}
      {/* <WorkSpace /> */}
      <Footer />
    </div>
  );
}

export default App;
