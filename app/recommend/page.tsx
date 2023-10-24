'use client'
import React, { useMemo, useState } from 'react';
import { Layout, Row, Col, Typography, Button, Tooltip } from 'antd';
import './recommend.css';
interface DataItem {
  id: number;
  name: string;
  ingd: string;
}
const data = [{id: 0, name:'된장찌개', ingd:'양파, 애호박, 등등'}, {id: 1, name: '순두부찌개', ingd:'순두부, 고춧가루'}, {id:2,name:'오징어볶음',ingd:'오징어, 양파'}, {id:3, name:'고구마맛탕', ingd:'고구마, 설탕'}, {id:4, name:'김치볶음밥',ingd:'김치, 밥'}]
const { Text } = Typography;

const RecommendPage: React.FC = () => {
  const itemsPerRow = 4; // 한 행당 표시할 아이템 개수

  // 데이터를 그리드로 분할
  const gridData: DataItem[][] = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    gridData.push(data.slice(i, i + itemsPerRow));
  }

  const options = ['Show', 'Hide', 'Center'];
  const [arrow, setArrow] = useState('Show');

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <div>
      <Text className='recommend-header'>오늘의 추천 요리</Text>
      {gridData.map((row, rowIndex) => (
        <Row key={rowIndex} gutter={16}>
          {row.map((item) => (
            <Col key={item.id} span={6}>
              <Tooltip placement="topLeft" title={item.ingd} arrow={mergedArrow}>
              <Text>
                <p>No: {item.id}</p>
                <p>{item.name}</p>
              </Text>
              </Tooltip>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default RecommendPage;