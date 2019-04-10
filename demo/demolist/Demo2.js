/**
*
* @title 语意色标签
* @description 表示提示信息的标签
* 
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo2 extends Component {
    render () { 
        return (
            <div className="demoPadding">
                <Tag colors="success">成功</Tag>
                <Tag colors="warning">警告</Tag>
                <Tag colors="error">错误</Tag>
                <Tag colors="message">信息</Tag>
             </div>
        )
    }
}

export default Demo2;