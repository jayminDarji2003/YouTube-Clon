import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import WatchVideoPage from "./components/WatchVideoPage";
import MainContainer from "./components/MainContainer";
import YoutubeChannelPage from "./components/YoutubeChannelPage";
import Profile from "./components/Profile";
import SuggestedVideoPage from "./components/SuggestedVideoPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<MainContainer />} />
            <Route path="watch" element={<WatchVideoPage />} />
            <Route path="channel" element={<YoutubeChannelPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="suggested" element={<SuggestedVideoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
