/**
*
* @title 可删除标签
* @description 用户可以手动删除的标签
*
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo4 extends Component {
    state = {
        tags: ['员工编号','员工姓名','员工性别','所属部门']
      };
    
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }
    render () { 
        return (
            <div className="demoPadding" >
                <Tag  visible={true} deleted onClose={this.handleClose}>员工编号</Tag>
                <Tag  visible={true} deleted onClose={this.handleClose}>员工姓名</Tag>
                <Tag  visible={true} deleted onClose={this.handleClose}>员工性别</Tag>
                <Tag  visible={true} deleted onClose={this.handleClose}>所属部门</Tag>
            </div>
        )
    }
}

export default Demo4;