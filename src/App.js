// App.js
import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import 'react-day-picker/dist/style.css';

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
