import React from 'react';
const CONTENT = ({liClass, liContent, liUL}) => (
    <li className={liClass}>{liContent}{liUL}</li>
)

const LI = ({liClass, redirect, icon, text}) => (
    <li className={liClass}>
        <a href={redirect}>
            <i className={`fa ${icon}`}></i>
            <span>{text}</span>
        </a>
    </li>
)

const CLEARFIX = () => (<div className="clearfix"></div>)
export default {CONTENT, LI, CLEARFIX}