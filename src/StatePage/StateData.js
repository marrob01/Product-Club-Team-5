import React from 'react';
import { useState, useEffect } from 'react';

function StateData() {

    const [stateData, setStateData] = useState([])

    const getStateData = async () => {
        await fetch('http://localhost:9000/state'

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setStateData(myJson)
            });
    }

    useEffect(() => {
        getStateData()
    }, [])



    const stateMap =
        stateData.map((state, i) => {
            return (
                <div key={i}>
                    <table>
                        <thead> spending prime award</thead>
                        <tbody>
                            <tr>
                                <th scope="col">{state.grant.recipientName}</th>
                                <td className="awardId">{state.grant.awardID} </td>
                                <td className="startDate">{state.grant.startDate}</td>
                                <td className="endDate"> {state.grant.endDate}</td>
                                <td className="county">{state.grant.County}</td>
                                <td className="city">{state.grant.City}</td>
                                <td className="covidObligations">{state.grant.covidObligations}</td>
                                <td className="awardAmount">{state.grant.awardAmount}</td>
                                <td className="awardType"> {state.grant.awardType}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                            <th scope="col">{state.directPayment.recipientName}</th>
                                <td scope="col" className="awardId">{state.directPayment.awardID} </td>
                            <td className="startDate">{state.directPayment.startDate}</td>
                            <td className="endDate"> {state.directPayment.endDate}</td>
                            <td className="state">{state.directPayment.State}</td>
                            <td className="county">{state.directPayment.County}</td>
                            <td className="city">{state.directPayment.City}</td>
                            <td className="covidObligations">{state.directPayment.covidObligations}</td>
                            <td className="awardAmount">{state.directPayment.awardAmount}</td>
                            <td className="awardType"> {state.directPayment.awardType}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        )

    const columns = [{
        dataField: 'select',
        text: 'Select'
    },
    {
        dataField: 'name',
        text: 'Product Name'
    }];


    return (
        <div>
            <div className="state-header">
                <header>ADVANCE STATE DATA SEARCH</header>
            </div>
            <div className="state-data">

                {stateMap}
            </div>
        </div>
    )
}

export default StateData
