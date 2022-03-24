import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";

import Map from "./map"
import Sync from "./sync"
import Standard from "./standard"
import Reference from "./reference"

function Operation() {
  return (
    <>
      <Routes>
        <Route path='map' element={<Map />} />
        <Route path='sync' element={<Sync />} />
        <Route path='standard' element={<Standard />} />
        <Route path='reference' element={<Reference />} />
      </Routes>
    </>
  );
}

export default Operation;