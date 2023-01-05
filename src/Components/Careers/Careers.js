import React from 'react'
import data from './jobs.json'

export default function Careers(data) {
    console.log(data.frontend.position)
    return(
        <div>
            <h1>Careers</h1>
            {/* {data.map((element, index) => {
                return(
                    <div key={index}>{element.frontend.position}</div>
                )
            })} */}
        </div>
    )
}