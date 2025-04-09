import React from 'react'

const Button = ({ buttonName="", ownClass="" }: { buttonName: string, ownClass: string }) => {
    return (
        <button className={ownClass}>{buttonName}</button>
    )
}

export default Button