import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
import PostsList from "./features/posts/PostsList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="postslist" element={<PostsList />} />
          </Route>
        </Route>

        <Route path="*" element={<Public />} />
      </Routes>
    </div>
  );
}

export default App;
