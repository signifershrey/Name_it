import React from 'react'
import './resultcontainer.css'
import NameCard from '../Namecard/namecard'


const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        // return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });



    return (
        <div className="result-container">

            {suggestedNameJsx}

        </div>
    )
}

export default ResultsContainer