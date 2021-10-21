import { useEffect, useState } from 'react'

const stateData = [
        {
            "award_id_uri": "SC2GM136445-9632363",
            "assistance_type_code": "Project Grant",
            "period_of_performance_start_date": "2020-03-02",
            "period_of_performance_current_end_date": "2023-02-28",
            "recipient_name": "UNIVERSITY OF TEXAS AT EL PASO",
            "recipient_state_name": "TEXAS",
            "recipient_country_name": "UNITED STATES",
            "recipient_city_name": "EL PASO",
            "federal_action_obligation": "151000.0",
            "total_obligated_amount": "302000.0",
            "cfda_title": "BIOMEDICAL RESEARCH AND RESEARCH TRAINING",
            "business_types_code": "S"
        },
        {
            "award_id_uri": "SC2GM136445-9632363",
            "assistance_type_code": "Project Grant",
            "period_of_performance_start_date": "2020-03-02",
            "period_of_performance_current_end_date": "2023-02-28",
            "recipient_name": "UNIVERSITY OF TEXAS AT EL PASO",
            "recipient_state_name": "TEXAS",
            "recipient_country_name": "UNITED STATES",
            "recipient_city_name": "EL PASO",
            "federal_action_obligation": "151000.0",
            "total_obligated_amount": "302000.0",
            "cfda_title": "BIOMEDICAL RESEARCH AND RESEARCH TRAINING",
            "business_types_code": "S"
        },
        {
            "award_id_uri": "SC2GM136445-9632363",
            "assistance_type_code": "Project Grant",
            "period_of_performance_start_date": "2020-03-02",
            "period_of_performance_current_end_date": "2023-02-28",
            "recipient_name": "UNIVERSITY OF TEXAS AT EL PASO",
            "recipient_state_name": "VIRGINIA",
            "recipient_country_name": "UNITED STATES",
            "recipient_city_name": "EL PASO",
            "federal_action_obligation": "151000.0",
            "total_obligated_amount": "302000.0",
            "cfda_title": "BIOMEDICAL RESEARCH AND RESEARCH TRAINING",
            "business_types_code": "S"
        },
        {
            "award_id_uri": "R21AI152513-1959686684",
            "assistance_type_code": "Project Grant",
            "period_of_performance_start_date": "2020-03-02",
            "period_of_performance_current_end_date": "2022-02-28",
            "recipient_name": "VIRGINIA COMMONWEALTH UNIVERSITY",
            "recipient_state_name": "VIRGINIA",
            "recipient_country_name": "UNITED STATES",
            "recipient_city_name": "RICHMOND",
            "federal_action_obligation": "186328.0",
            "total_obligated_amount": "411468.0",
            "cfda_title": "ALLERGY AND INFECTIOUS DISEASES RESEARCH",
            "business_types_code": "H"
        }
]

const filterParams = {
    award_id_uri: "R21AI152513-1959686684",
    assistance_type_code: "Project Grant",
    period_of_performance_start_date: "2020-03-02",
    period_of_performance_current_end_date: "2022-02-28",
    recipient_name: "VIRGINIA COMMONWEALTH UNIVERSITY",
    recipient_state_name: "VIRGINIA",
    recipient_country_name: "UNITED STATES",
    recipient_city_name: "RICHMOND",
    federal_action_obligation: "186328.0",
    total_obligated_amount: "411468.0",
    cfda_title: "ALLERGY AND INFECTIOUS DISEASES RESEARCH",
    business_types_code: "H"
}

const Filter = () => {

    const [filteredDataList, setFilteredDataList] = useState(null)
    // const [filter, setFilter] = useState(null)

    const handleFilterSearch = (newFilter) => {
        let filteredData = stateData
        if (!newFilter) setFilteredDataList(stateData)
        else {
            if (newFilter.award_id_uri) filteredData = filteredData.filter(award => award.award_id_uri === newFilter.award_id_uri)
            if (newFilter.assistance_type_code) filteredData = filteredData.filter(award => award.assistance_type_code === newFilter.assistance_type_code)
            if (newFilter.period_of_performance_start_date) filteredData = filteredData.filter(award => award.period_of_performance_start_date === newFilter.period_of_performance_start_date)
            if (newFilter.period_of_performance_current_end_date) filteredData = filteredData.filter(award => award.period_of_performance_current_end_date === newFilter.period_of_performance_current_end_date)
            if (newFilter.recipient_name) filteredData = filteredData.filter(award => award.recipient_name === newFilter.recipient_name)
            if (newFilter.recipient_state_name) filteredData = filteredData.filter(award => award.recipient_state_name === newFilter.recipient_state_name)
            if (newFilter.recipient_country_name) filteredData = filteredData.filter(award => award.recipient_country_name === newFilter.recipient_country_name)
            if (newFilter.recipient_city_name) filteredData = filteredData.filter(award => award.recipient_city_name === newFilter.recipient_city_name)
            if (newFilter.federal_action_obligation) filteredData = filteredData.filter(award => award.federal_action_obligation === newFilter.federal_action_obligation)
            if (newFilter.total_obligated_amount) filteredData = filteredData.filter(award => award.total_obligated_amount === newFilter.total_obligated_amount)
            if (newFilter.cfda_title) filteredData = filteredData.filter(award => award.cfda_title === newFilter.cfda_title)
            if (newFilter.business_types_code) filteredData = filteredData.filter(award => award.business_types_code === newFilter.business_types_code)
            setFilteredDataList(filteredData)
        }
    }
    
    useEffect(() => {
        const filterData = async () => {
            try {
                handleFilterSearch(filterParams)
            } catch (err) {
                console.log(err)
            }
        }
        filterData()
    }, [])
    
    if (filteredDataList) console.log(filteredDataList)


    return (
        <div>
            
        </div>
    )
}

export default Filter