import { useEffect, useState } from 'react'



const Filter = ({newFilter}) => {

    const [filteredDataList, setFilteredDataList] = useState(null)
    // const [filter, setFilter] = useState(null)


    // Award_Id: String,
    //     Start_Date: Date,
    //     End_Date: Date,
    //     Recepient_Name: String,
    //     Country: String,
    //     City: String,
    //     Federal_Covid_19_Obligation: Number,
    //     Total_Award_Amount: Number,
    //     cfda_title: String,
    //     award_description: String,
    //     Award_Type: String

    const handleFilterSearch = () => {
        let filteredData = newFilter;
        if (!newFilter) setFilteredDataList()
        else {
            if (newFilter.Start_Date) filteredData = filteredData.filter(award => award.Start_Date === newFilter.Start_Date)
            if (newFilter.End_Date) filteredData = filteredData.filter(award => award.End_Date === newFilter.End_Date)
            if (newFilter.Recepient_Name) filteredData = filteredData.filter(award => award.Recepient_Name === newFilter.Recepient_Name)
            if (newFilter.City) filteredData = filteredData.filter(award => award.City === newFilter.City)
            if (newFilter.Total_Award_Amount) filteredData = filteredData.filter(award => award.recipient_name === newFilter.recipient_name)
            if (newFilter.Award_description) filteredData = filteredData.filter(award => award.Award_description === newFilter.Award_description)
            if (newFilter.cfda_title) filteredData = filteredData.filter(award => award.cfda_title === newFilter.cfda_title)
            setFilteredDataList(filteredData) 
        }
    }
    
    useEffect(() => {
        const filterData = async () => {
            try {
                handleFilterSearch()
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