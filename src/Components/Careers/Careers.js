import React from 'react'
import data from './jobs.json'

export default function Careers() {
    console.log(data.frontend.position)
    return(
        <div>
            {data.map((element, index) => {
                return(
                    <div key={index}>{element.frontend.position}</div>
                )
            })}
        </div>
    )
}