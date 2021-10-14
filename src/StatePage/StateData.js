import React from 'react'

function StateData(props) {
    console.log(props.state);
    return (
        <div>
            <div className="state-header">
            <header>ADVANCE STATE DATA SEARCH</header>
            </div>
            {/* <div className="state-data">
                stateData.map(state, index) => {
                    <div> {stateData.recipientName} </div>

                } 
            </div> */}

            
        </div>
    )
}

export default StateData
