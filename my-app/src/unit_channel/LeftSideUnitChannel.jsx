import React, { Component } from 'react';
import ToggleFloorUnit from './left-side/ToggleFloorUnit';
import IconUnit from './left-side/IconUnit';
import MemberUnit from './left-side/MemberUnit';
class LeftSideUnitChannel extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-column col-3 px-4'>
                    <h1>Left Side</h1>
                    <ToggleFloorUnit />
                    <IconUnit />
                    <MemberUnit />
                </div>
            </React.Fragment>
        )
    }
}

export default LeftSideUnitChannel;
