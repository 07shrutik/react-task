import React from 'react'

export default function Button({onClick,buttonName}) {
    return (
        <>
            <button onClick={onClick}>{buttonName}</button>
        </>
    )
}