/**
*
* @title 可删除标签
* @description 用户可以手动删除的标签
*
*/
import React, { Component } from 'react';
import Tag from '../../src';

class Demo4 extends React.Component {
    state = {
      tags: ['员工编号', '员工姓名', '员工性别','所属部门']
    };
  
    handleClose = (removedTag) => {
      const tags = this.state.tags.filter(tag => tag !== removedTag);
      this.setState({ tags });
    }
  
    forMap = (tag) => {
      const tagElem = (
        <Tag visible={true} deleted 
          onClose={(e) => {
            e.preventDefault();
            this.handleClose(tag);
          }}
        >
          {tag}
        </Tag>
      );
      return (
        <span key={tag}>
          {tagElem}
        </span>
      );
    }
  
    render() {
      const { tags } = this.state;
      const tagChild = tags.map(this.forMap);
        //  var add = document.getElementById("addTag").value;
        //  if(add!=" ")
        //  {  
        //   tags.push(add);
        //  }
      return (
        <div className="demoPadding">
          {tagChild}
          <input type="text" id="addTag"/>
        </div>
      );
    }
  }

export default Demo4;