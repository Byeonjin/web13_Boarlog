import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./global.css";
import Home from "@/pages/Home/Home";
import Login from "./pages/Login/Login";
import Test from "./pages/Test/Test";
import Instructor from "./pages/Instructor/Instructor";
import Participant from "./pages/Participant/Participant";
import Review from "./pages/Review/Review";

import { RecoilRoot } from "recoil";
import Example from "./pages/Example/Example";

import ToastContainer from "./components/Toast/ToastContainer";
import Start from "./pages/Start/Start";
import MyPage from "./pages/MyPage/MyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LectureEnd from "./pages/LectureEnd/LectureEnd";

const App = () => {
  return (
    <RecoilRoot>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start" element={<Start />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/test" element={<Test />} />
          {!Modernizr.touchevents && <Route path="/instructor" element={<Instructor />} />}
          <Route path="/participant" element={<Participant />} />
          <Route path="/review" element={<Review />} />
          <Route path="/lecture-end" element={<LectureEnd />} />
          <Route path="/example" element={<Example />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate to="/error" />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
