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
            "type" : "grant",
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

    const [filteredDataList, setFilteredDataList] = useState(null)
    const [filter, setFilter] = useState(null)

    const handleFilterSearch = (newFilter) => {
        // setFilter(newFilter)
        if (!newFilter) {
            setFilteredDataList(stateData)
        } else {
            let filteredData = stateData.filter(award => award.type === newFilter)
            setFilteredDataList(filteredData)
        }
    }
    
    useEffect(() => {
        const filterData = async () => {
            try {
                handleFilterSearch('directPayment')
            } catch (err) {
                console.log(err)
            }
        }
        filterData()
    }, [])
    
    if (filteredDataList) console.log(filteredDataList)


    return (
        <div>
                hi
            </div>
        )
    }

export default Filter