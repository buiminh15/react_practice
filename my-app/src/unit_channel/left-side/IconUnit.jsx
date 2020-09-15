import React, { Component } from 'react'
import './Unit.css';

class IconUnit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, icon: 'https://picsum.photos/200/300', text: 'a' },
                { id: 2, icon: 'https://picsum.photos/200/300', text: 'b' },
                { id: 3, icon: 'https://picsum.photos/200/300', text: 'c' },
                { id: 4, icon: 'https://picsum.photos/200/300', text: 'd' },
                { id: 5, icon: 'https://picsum.photos/200/300', text: 'e' },
            ]
        };
    }
    render() {
        let list = this.state.data.map(item => (
            <div className="m-3 col-3 d-flex flex-column justify-content-center">
                <div className="icon-scale">
                    <img src={item.icon} alt="Girl in a jacket" />
                </div>
                <p className="wrap-text">{item.text}</p>
            </div>
        ))
        return (
            <div className="row flex-wrap">   
                {list}
            </div>
        )
    }
}

export default IconUnit