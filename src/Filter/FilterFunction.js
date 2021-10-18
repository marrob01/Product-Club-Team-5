import { useEffect, useState } from 'react'

const stateData = [
        {
            "type" : "grant",
            "awardID": 43342,
            "startDate": "01515001",
            "endDate": "01515001",
            "recipientName": "bean",
            "County": "String",
            "City": "String",
            "covidObligations": "String",
            "awardAmount": 1,
            "awardType": "String"
        },
        {
            "type" : "directPayment",
            "awardID": 53873,
            "startDate": "01515001",
            "endDate": "01515001",
            "recipientName": "marcus",
            "state": "String",
            "county": "String",
            "city": "String",
            "covidObligations": "String",
            "awardAgency": "String",
            "awardAmount": 10,
            "awardType": "String"
        },
        {
            "type" : "directPayment",
            "awardID": 53873,
            "startDate": "01515001",
            "endDate": "01515001",
            "recipientName": "marcus",
            "state": "String",
            "county": "String",
            "city": "String",
            "covidObligations": "String",
            "awardAgency": "String",
            "awardAmount": 10,
            "awardType": "String"
        },
        {
            "type" : "directPayment",
            "awardID": 53873,
            "startDate": "01515001",
            "endDate": "01515001",
            "recipientName": "marcus",
            "state": "String",
            "county": "String",
            "city": "String",
            "covidObligations": "String",
            "awardAgency": "String",
            "awardAmount": 10,
            "awardType": "String"
        }
]


const Filter = () => {

    const [filteredData, setFilteredData] = useState(null)

    useEffect(() => {
        const filterData = async () => {
            try {
                setFilteredData(stateData)

            } catch (err) {
                console.log(err)
            }
        }
        filterData()
    }, [])

    if (filteredData) console.log(filteredData)

    return (
        <div>
                hi
            </div>
        )
    }

export default Filter