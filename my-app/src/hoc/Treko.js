import React from 'react'

const Treko = (WrappedComponent) => {
    const colors = ['red','orange','light-blue']
    const randomColor = colors[Math.floor(Math.random()*3)]
    const className = randomColor + ' darken-4'

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Treko