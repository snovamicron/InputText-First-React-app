import React from 'react'

const Button = (prop) => {
    return (
        <div>
            <button type={prop.type} className={prop.classProps} style={prop.style} onClick={prop.btnFunc}>
                {prop.title}
            </button>
        </div>
    )
}

export default Button
