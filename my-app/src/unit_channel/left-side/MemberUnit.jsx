import React, { Component } from 'react';
import './Unit.css';

class MemberUnit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
                "name": "Doralia",
                "email": "dsarll0@google.pl",
                "gender": "Female"
            }, {
                "id": 2,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
                "name": "Tani",
                "email": "tfilliskirk1@networksolutions.com",
                "gender": "Female"
            }, {
                "id": 3,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
                "name": "Hermy",
                "email": "hsaurin2@hp.com",
                "gender": "Male"
            }, {
                "id": 4,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "name": "Ladonna",
                "email": "lolivetti3@hibu.com",
                "gender": "Female"
            }, {
                "id": 5,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
                "name": "Tobin",
                "email": "tmahaddy4@mlb.com",
                "gender": "Male"
            }, {
                "id": 6,
                "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
                "name": "Aurie",
                "email": "aventon5@dot.gov",
                "gender": "Female"
            }, {
                "id": 7,
                "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
                "name": "Ketti",
                "email": "kbaddiley6@1und1.de",
                "gender": "Female"
            }, {
                "id": 8,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "name": "Charita",
                "email": "cyannoni7@baidu.com",
                "gender": "Female"
            }, {
                "id": 9,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "name": "Twyla",
                "email": "twaddell8@topsy.com",
                "gender": "Female"
            }, {
                "id": 10,
                "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "name": "Gray",
                "email": "gthrush9@auda.org.au",
                "gender": "Male"
            }]
        };
    }

    render() {
        // let list = this.state.data.map(item => (
        //     <div className="m-3 col-3 d-flex flex-column justify-content-center">
        //         <div className="icon-scale">
        //             <img src={item.icon} alt="Girl in a jacket" />
        //         </div>
        //         <p className="wrap-text">{item.text}</p>
        //     </div>
        // ))
        return (
            <div class="row">
                <div class="col-xs-6 how-img">
                    <img src="http://dummyimage.com/100x100.png/cc0000/ffffff" class="rounded-circle" alt="" />
                </div>
                <div class="col-xs-6">
                    <h4>Find rewarding projects</h4>
                    <p class="subheading">GetLance is a greayour own freelance business.</p>
                    <p class="text-muted">Freedom to work on ideal projects. </p>
                </div>
            </div>
        )
    }
}

export default MemberUnit