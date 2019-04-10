/**
*
* @title 默认标签
* @description 默认提供两种形式的标签，主要用于信息标注。
*
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo1 extends Component {
    render () { 
        return (
            <div className="demoPadding">
                <Tag colors="defaultdark" onvisible>Default</Tag>
                <Tag colors="defaultlight" onvisible bordered={true}>Default</Tag>
            </div>
        )
    }
}

export default Demo1;