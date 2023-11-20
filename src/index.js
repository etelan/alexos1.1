import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// React Imports!
import App from './App';
import VirtualWardrobe from './components/Wardrobe/VirtualWardrobe';
import CatnipLeaderboardScreen from './components/CatnipScreen/CatnipLeaderboardScreen';

const centerStyle = {
  display: 'grid',
  placeItems: 'center',
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/wardrobe",
    element: 
    <div style={centerStyle}>
        <VirtualWardrobe/>
    </div>,
  },

  {
    path: "/leaderboard",
    element: <CatnipLeaderboardScreen/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);