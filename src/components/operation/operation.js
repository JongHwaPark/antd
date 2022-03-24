import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";

import RobotControl from "./robotControl"
import TargetTracking from "./targetTracking"
import TargetCommand from "./targetCommand"
import Inspection from "./inspection"

function Operation() {
  return (
    <>
      <Routes>
        <Route index element={<RobotControl />} />
        <Route path='robotControl' element={<RobotControl />} />
        <Route path='targetTracking' element={<TargetTracking />} />
        <Route path='targetCommand' element={<TargetCommand />} />
        <Route path='inspection' element={<Inspection />} />
      </Routes>
    </>
  );
}

export default Operation;