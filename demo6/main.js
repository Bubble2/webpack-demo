var React = require('react');
var ReactDOM= require('react-dom');

var style = require('./style.css');

ReactDOM.render(
    <div>
        <h1 className={style.title}>Hello World!</h1>
    </div>,
    document.getElementById('root')
)