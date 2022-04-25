import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../container/Home";
import Albums from "../container/Albums";
import Comments from "../container/Comments";
import Photos from "../container/Photos";
import Posts from "../container/Posts";
import Todos from "../container/Todos";
import Users from "../container/Users";
import '../app.css'

const MyRouter = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
             <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/photos">Photos</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MyRouter;
