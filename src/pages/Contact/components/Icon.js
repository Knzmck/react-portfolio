import React from 'react';

function Icon(props) {
    return (
        <div>
            {props.icons.map(item => (
                <button id={item.buttonId} type="button" className="btn social" key={item.id}>
                    <i className={item.iClassName} onClick={() => window.open(item.link)}></i>
                    {item.name}
                </button>
            ))}
        </div>
    )
}
export default Icon;