import React from 'react'
import './resultcontainer.css'
import NameCard from '../Namecard/namecard'

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNameJsx = suggestedNames.map(suggestedName => {
        // return <p key={suggestedName}>{suggestedName}</p>
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })


    return (
        <div className="result-container">
            <p>These are results!</p>
            <p>{/*suggestedNames.length > 0 ? suggestedNames[0] : null*/} </p>
            <p>{suggestedNameJsx}</p>
            <p>{/*suggestedNames.length > 0 && suggestedNames[0]*/}</p>
        </div>
    )
}

export default ResultsContainer