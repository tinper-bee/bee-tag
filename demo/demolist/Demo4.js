/**
*
* @title 可删除标签
* @description 用户可以手动删除的标签
*
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo4 extends Component {
    render () { 
        return (
            <div className="demoPadding" >
                <Tag  visible={true} deleted={true}>员工编号</Tag>
                <Tag  visible={true} deleted={true}>员工姓名</Tag>
                <Tag  visible={true} deleted={true}>员工性别</Tag>
                <Tag  visible={true} deleted={true}>所属部门</Tag>
            </div>
        )
    }
}

export default Demo4;