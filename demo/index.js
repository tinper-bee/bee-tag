import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 默认标签","code":"/**\n*\n* @title 默认标签\n* @description 默认提供两种形式的标签，主要用于信息标注。\n*\n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\nclass Demo1 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag colors=\"defaultdark\" onvisible>Default</Tag>\n                <Tag colors=\"defaultlight\" onvisible bordered={true}>Default</Tag>\n            </div>\n        )\n    }\n}\n\n","desc":" 默认提供两种形式的标签，主要用于信息标注。","scss_code":".demoPadding{\r\n  tag{\r\n      margin: auto 16px;\r\n  }\r\n  .divider{\r\n      margin: -3px 0;\r\n      height: 25px;\r\n      overflow: hidden;\r\n      background-color: #fff;\r\n  }\r\n  .divider0{\r\n      height: 45px;\r\n      background-color: #fff;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 语意色标签","code":"/**\r\n*\r\n* @title 语意色标签\r\n* @description 表示提示信息的标签\r\n* \r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo2 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag colors=\"success\">成功</Tag>\r\n                <Tag colors=\"warning\">警告</Tag>\r\n                <Tag colors=\"error\">错误</Tag>\r\n                <Tag colors=\"message\">信息</Tag>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 表示提示信息的标签"},{"example":<Demo3 />,"title":" disable标签","code":"/**\r\n*\r\n* @title disable标签\r\n* @description 禁用的标签，不可以进行编辑。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo3 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag disabled={true}>禁用</Tag>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 禁用的标签，不可以进行编辑。"},{"example":<Demo4 />,"title":" 可删除标签","code":"/**\r\n*\r\n* @title 可删除标签\r\n* @description 用户可以手动删除的标签\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo4 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\" >\r\n                <Tag bordered visible={true} deleted={true}>员工编号</Tag>\r\n                <Tag bordered visible={true} deleted={true}>员工姓名</Tag>\r\n                <Tag bordered visible={true} deleted={true}>员工性别</Tag>\r\n                <Tag bordered visible={true} deleted={true}>所属部门</Tag>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 用户可以手动删除的标签"},{"example":<Demo5 />,"title":" 可选标签","code":"/**\r\n*\r\n* @title 可选标签\r\n* @description 可以表示选中和未选中两种状态的标签\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo5 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag select={true}>部门</Tag>\r\n                <Tag select={true}>职级</Tag>\r\n                <Tag select={true}>年份</Tag>\r\n                <Tag select={true}>月份</Tag> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 可以表示选中和未选中两种状态的标签"},{"example":<Demo6 />,"title":"  多彩标签","code":"/**\r\n *\r\n * @title  多彩标签\r\n * @description 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色\r\n * \r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\n\r\n class Demo6 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div>\r\n                    <Tag colors=\"tag1\">Tag</Tag>\r\n                    <Tag colors=\"tag2\">Tag</Tag>\r\n                    <Tag colors=\"tag3\">Tag</Tag>\r\n                    <Tag colors=\"tag4\">Tag</Tag>\r\n                    <Tag colors=\"tag5\">Tag</Tag>\r\n                    <Tag colors=\"tag6\">Tag</Tag>\r\n                    <Tag colors=\"tag7\">Tag</Tag>\r\n                    <Tag colors=\"tag8\">Tag</Tag>\r\n                    <Tag colors=\"tag9\">Tag</Tag>\r\n                    <Tag colors=\"tag10\">Tag</Tag>\r\n                    <div className=\"divider\"></div>\r\n                    <Tag colors=\"tag11\">Tag</Tag>\r\n                    <Tag colors=\"tag12\">Tag</Tag>\r\n                    <Tag colors=\"tag13\">Tag</Tag>\r\n                    <Tag colors=\"tag14\">Tag</Tag>\r\n                    <Tag colors=\"tag15\">Tag</Tag>     \r\n                </div>  \r\n                <div className=\"divider0\"></div>\r\n                <div>\r\n                    <Tag bordered colors=\"border_tag1\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag2\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag3\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag4\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag5\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag6\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag7\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag8\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag9\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag10\">Tag</Tag>\r\n                    <div className=\"divider\"></div>\r\n                    <Tag bordered colors=\"border_tag11\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag12\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag13\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag14\">Tag</Tag>\r\n                    <Tag bordered colors=\"border_tag15\">Tag</Tag>\r\n                </div>       \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));