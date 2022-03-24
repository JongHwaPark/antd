import React, { useState, useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { Stage, Sprite } from '@inlet/react-pixi';
import * as RobotApi from '../../../lib/Robot';
import * as FileApi from '../../../lib/File';

import RobotPositionJoyStick from '../../common/robotPositionJoyStick';

function CanvasMap() {
  const [imgData, setImgData] = useState();
  const [dataWidth, setDataWidth] = useState(0);
  const [dataHeight, setDataHeight] = useState(0);

  async function setMapData() {
    try {
      const map = await RobotApi.getMap('office');
      FileApi.setMapData(map);
      return map;
    } catch (err) {
      console.log(err);
    }
  }

  const drawMap = ({ data, width, height }) => {
    const canvas_padding = { top: 0, bottom: 0, left: 0, right: 0 };
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = width + canvas_padding.left + canvas_padding.right;
    ctx.canvas.height = height + canvas_padding.top + canvas_padding.bottom;

    const imageData = ctx.getImageData(0, 0, width, height);
    for (let cell = 0; cell < width * height; cell += 1) {
      let color = [255, 255, 255]; // Unknown Area
      color = (data[cell] >= 0) ? [240, 240, 236] : color; // Movable Area
      color = (data[cell] > 40) ? [255, 255, 255] : color; // Unknown Area
      color = (data[cell] > 70) ? [30, 30, 30] : color; // Unmovable Area
      imageData.data[cell * 4 + 0] = color[0]
      imageData.data[cell * 4 + 1] = color[1]
      imageData.data[cell * 4 + 2] = color[2]
      imageData.data[cell * 4 + 3] = 255;
    }
    ctx.putImageData(imageData, canvas_padding.left, canvas_padding.top);
    setImgData(canvas.toDataURL());
    setDataWidth(width);
    setDataHeight(height);

    // reSizeCanvasData();
  }

  useEffect(() => {
    async function getMap() {
      const map = await setMapData();
      drawMap(map);
      console.log('mapData', map);
    }
    getMap();
  }, []);

  const width = 500
  const height = 500
  const stageProps = {
    height,
    width,
    options: {
      // backgroundAlpha: 0,
      antialias: true,
    },
  }

  return (
    <Stage {...stageProps}>
      {imgData && (
        <Sprite
          image={imgData}
          option={{ width: dataWidth, height: dataHeight }}
        />
      )}

    </Stage>
  )
}

function RobotControl() {
  return (
    <>
      <Row>
        <Col span={12}>
          {/* <CanvasMap /> */}
        </Col>
        <Col span={12}>
          <RobotPositionJoyStick />
        </Col>
      </Row>
    </>
  );
}

export default RobotControl;