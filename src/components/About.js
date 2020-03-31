import React, { Component } from 'react'
import '../assests/css/About.css'
var x = [
    ["school", "studies At", "Damanhour univerisity"],
    ["home_work", "Faculty of", "Veterinary Medicie"],
    ["room", "Lives in", "Damanhour"],
    ["house", "from", "Alexandria"],
    ["cake", "Birth Date", "1st May"],
    ["mood", "Gender", "Male"]
]
class About extends Component {
    render() {
        return (
            <div className="About">
                {x.map(h => (
                    <div className="info-row">
                        <div className="info-icon"><i className="material-icons">{h[0]}</i></div>
                        <div className="info-title">{h[1]}</div>
                        <div className="info-value"><a href="#">{h[2]}</a></div>
                    </div>
                ))  
                }
            </div>
        )
    }
}
export default About;
