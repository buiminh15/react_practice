import React, { Component } from 'react';
import './Unit.css';
class ToggleFloorUnit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUnit: true
        };
    }

    render() {
        return (
            <div className="d-flex">
                <button className={this.state.isUnit ? "btn btn-secondary flex-fill" : "btn btn-primary flex-fill"}>フロア</button>
                <button className={this.state.isUnit ? "btn btn-primary flex-fill" : "btn btn-secondary flex-fill"}>ユニット</button>
            </div>
        )
    }
}

export default ToggleFloorUnit