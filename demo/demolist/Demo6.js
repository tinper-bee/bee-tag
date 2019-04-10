/**
 *
 * @title  多彩标签
 * @description 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色
 * 
 */

import React, { Component } from 'react';
import Tag from '../../src';

 class Demo6 extends Component {

    render () {
        return (
            <div className="demoPadding">
                <div>
                    <Tag colors="tag1">Tag</Tag>
                    <Tag colors="tag2">Tag</Tag>
                    <Tag colors="tag3">Tag</Tag>
                    <Tag colors="tag4">Tag</Tag>
                    <Tag colors="tag5">Tag</Tag>
                    <Tag colors="tag6">Tag</Tag>
                    <Tag colors="tag7">Tag</Tag>
                    <Tag colors="tag8">Tag</Tag>
                    <Tag colors="tag9">Tag</Tag>
                    <Tag colors="tag10">Tag</Tag>
                    <div className="divider"></div>
                    <Tag colors="tag11">Tag</Tag>
                    <Tag colors="tag12">Tag</Tag>
                    <Tag colors="tag13">Tag</Tag>
                    <Tag colors="tag14">Tag</Tag>
                    <Tag colors="tag15">Tag</Tag>     
                </div>  
                <div className="divider0"></div>
                <div>
                    <Tag bordered colors="border_tag1">Tag</Tag>
                    <Tag bordered colors="border_tag2">Tag</Tag>
                    <Tag bordered colors="border_tag3">Tag</Tag>
                    <Tag bordered colors="border_tag4">Tag</Tag>
                    <Tag bordered colors="border_tag5">Tag</Tag>
                    <Tag bordered colors="border_tag6">Tag</Tag>
                    <Tag bordered colors="border_tag7">Tag</Tag>
                    <Tag bordered colors="border_tag8">Tag</Tag>
                    <Tag bordered colors="border_tag9">Tag</Tag>
                    <Tag bordered colors="border_tag10">Tag</Tag>
                    <div className="divider"></div>
                    <Tag bordered colors="border_tag11">Tag</Tag>
                    <Tag bordered colors="border_tag12">Tag</Tag>
                    <Tag bordered colors="border_tag13">Tag</Tag>
                    <Tag bordered colors="border_tag14">Tag</Tag>
                    <Tag bordered colors="border_tag15">Tag</Tag>
                </div>       
            </div>
        )
    }
}

export default Demo6;