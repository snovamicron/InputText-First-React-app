import React from 'react'

const Button = (prop) => {
    return (
        <div>
            <button className={prop.classProps}  onClick={prop.btnFunc}>
                {prop.title}
            </button>
        </div>
    )
}

export default Button
