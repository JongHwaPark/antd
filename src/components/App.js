import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LayoutTemplate from './common/layoutTemplate';
import Operation from './operation';
import Device from './device';
import Setting from './setting';
import Log from './log';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LayoutTemplate>
        <Routes>
          <Route index element={<Operation />} />
          <Route path="/operation/*" element={<Operation />} />
          <Route path="/device" element={<Device />} />
          <Route path="/setting/*" element={<Setting />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default App;
