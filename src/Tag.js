import React, { Component } from 'react';
import ReactDoM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'bee-icon';

const propTypes = {
    /**
     * @title 样式 
     */
    style: PropTypes.object,

    /**
     * @title 形状 
     */
    bordered: PropTypes.bool,

    /**
     * @title 类型
     */
    colors: PropTypes.string,

    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: PropTypes.bool,

     /**
     * @title 是否删除
     * @veIgnore
     */
    deleted: PropTypes.bool,

    /**
     * @title 是否选中
     * @veIgnore
     */
    select: PropTypes.bool,
    
    /**
     * @title 标签是否显示关闭图标
     * @veIgnore
     */
    visible: PropTypes.bool,
    
    /**
     * @title 类名
     * @veIgnore
     */
    className: PropTypes.string,

    tagClick: PropTypes.func,
    iconClick: PropTypes.func
};

const defaultProps = {
    disabled: false,
    deleted: false,
    visible: false,
    clsPrefix: 'u-tag',
    bordered: false,
    select: false
};

const colorsMap = {
    tag1: 'tag1',
    tag2: 'tag2',
    tag3: 'tag3',
    tag4: 'tag4',
    tag5: 'tag5',
    tag6: 'tag6',
    tag7: 'tag7',
    tag8: 'tag8',
    tag9: 'tag9',
    tag10: 'tag10',
    tag11: 'tag11',
    tag12: 'tag12',
    tag13: 'tag13',
    tag14: 'tag14',
    tag15: 'tag15',
    border_tag1: 'border_tag1',
    border_tag2: 'border_tag2',
    border_tag3: 'border_tag3',
    border_tag4: 'border_tag4',
    border_tag5: 'border_tag5',
    border_tag6: 'border_tag6',
    border_tag7: 'border_tag7',
    border_tag8: 'border_tag8',
    border_tag9: 'border_tag9',
    border_tag10: 'border_tag10',
    border_tag11: 'border_tag11',
    border_tag12: 'border_tag12',
    border_tag13: 'border_tag13',
    border_tag14: 'border_tag14',
    border_tag15: 'border_tag15',
    defaultdark: 'defaultdark',
    defaultlight: 'defaultlight',
    success: 'success',
    warning: 'warning',
    error: 'error',
    message: 'message'
};

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state={
            selected:false
        }
    }
    click=(e)=>{
        this.setState({
            selected:!this.state.selected,
        })
        this.props.tagClick&&this.props.tagClick(e)
    }
    onClose=(e)=>{
        this.props.iconClick&&this.props.iconClick(e)
    }
    render() {
        let {colors,
            disabled,
            deleted,
            select,
            className,
            bordered,
            children,
            clsPrefix,
            visible,
            ...others} = this.props;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (colorsMap[colors]) {
            clsObj[`${clsPrefix}-${colorsMap[colors]}`] = true;
        }
        if(bordered){
            clsObj[`${clsPrefix}-bordered`] = true;
        }
        if(select){
            clsObj[`${clsPrefix}-select`] = select;
        }
        if(deleted){
            clsObj[`${clsPrefix}-delete`] = deleted;
        }
        
        // 选择标签选中时，改变标签当前状态
        if(this.props.select == true){
            if(this.state.selected){
                clsObj[`${clsPrefix}-selected`] = true;
            }
        }

        let classes = classnames(clsPrefix, clsObj);
        return(
            <span {...others} className={classes} disabled={disabled} deleted={deleted} select={select} onClick={this.click}>
                {children}
                {visible ? <Icon type='uf-close' onClick={this.onClose}/> : ''}
            </span>
        );
    }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
