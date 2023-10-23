'use client';
import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './Ingredient.css';
interface Props {
  list: String[];
}

const IngredientList: React.FC<Props> = (prop) => {
  const [ingredientList, setIngredientList] = useState(prop.list);
  const [des, setDes] = useState<String>('');
  function onDeleteClick(idx: number): undefined {
    const updatedList = ingredientList.filter((_, index) => index !== idx);
    setIngredientList(updatedList);
  }

  function onSelectIngredient(idx: number): undefined {
    setDes(ingredientList[idx]);
  }
  
  useEffect(() => {
    setIngredientList(prop.list);
  }, [prop.list]);

  return (
  <div className='ingredient-page-wrapper'>
    <div className='ingredient-list-wrapper'>
      <List
        size="small"
        dataSource={ingredientList}
        renderItem={(item, index) => <div className='ingredient-item'>
          <Button onClick={() => onSelectIngredient(index)}   style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}>{item}</Button>
          <Button
            className='deleteButton'
            size='small'
            onClick={() => onDeleteClick(index)}
            style={{ border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}
            icon={<CloseOutlined />}
          ></Button></div>} />
    </div><div className='ingredient-description'>
        자세히 설명해랏 {des}
      </div>
      </div>
  )
  
};

export default IngredientList;