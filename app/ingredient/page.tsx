'use client';
import React, { useState } from 'react';
import { Layout, Divider, Button, Typography, AutoComplete, Input } from 'antd';
import IngredientList from './IngredientList';
import type { DefaultOptionType, SelectProps } from 'antd/es/select';

const { Sider, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;
const data = [
  '양파',
  '마늘',
  '고추',
  '감자',
  '고구마',
  '돼지고기',
];

const IngredientPage: React.FC = () => {
 
  const [listData, SetListData] = useState(data);
  const onAddClick = (value: string) => {
    const updatedList = [...listData, value];
    SetListData(updatedList);
  }

  const searchResult = (value: string) => {
    const filteredResult = listData.filter(val => val.includes(value));
    const result:DefaultOptionType[] = []
    filteredResult.forEach(element => {
      const a: DefaultOptionType = {
        label: (<div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{element}</span>
      </div>),
        element
      };
      result.push(a);
    });
    return result;
  }

  const [options, setOptions] = useState<SelectProps<object>['options']>([]);;

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <div className='ingredient-wrapper'>
      <Title level={2}>
        냉장고 현황
      </Title>
      <Divider orientationMargin={100}/>
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ width: 300, marginBottom:"30px", marginLeft:"30px", alignSelf:"center"}}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        size="large"
      >
      <Input.Search 
        size="large"
        placeholder="추가할 재료를 입력하세요."
        enterButton="추가"
        onSearch={onAddClick}
      />
    </AutoComplete>
      <IngredientList list={listData}></IngredientList>
    </div>
  );
};



const onSearch = () => {
  
}



export default IngredientPage;