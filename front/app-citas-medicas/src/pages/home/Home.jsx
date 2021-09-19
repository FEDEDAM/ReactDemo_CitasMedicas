import React from 'react'
import  SpecialitiesSection  from '../../components/HomeSections/Specialities/SpecialitiesSection'
import { useSpeciality } from '../../hooks/useSpecialy'

const Home = () => {
    const { specialities } = useSpeciality();
    
    return (
        <div>
            <h1>Home</h1>
            <SpecialitiesSection specialities = { specialities }/>
        </div>
    )
}

export default Home
