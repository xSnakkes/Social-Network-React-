import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="color">
        <div className="container">
          <div className="app__wrapper">
            <div className="app__wrapper-nav">
              <Header />
              <Navbar />
            </div>
            <div className="app__wrapper-content">
              <Routes>
                <Route
                  path="/profile/*"
                  element={
                    <Profile
                      posts={props.postItem}
                      newPostChange={props.newPostChange}
                      dispatch={props.dispatch}
                    />
                  }
                />
                <Route
                  path="/dialogs/*"
                  element={
                    <Dialogs
                      dialogs={props.dialogInfo}
                      messages={props.messages}
                      newMessageText={props.newMessageText}
                      dispatch={props.dispatch}
                    />
                  }
                />
                <Route path="/news/*" element={<Dialogs />} />
                <Route path="/music/*" element={<Dialogs />} />
                <Route path="/setting/*" element={<Dialogs />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
