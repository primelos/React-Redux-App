import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getData } from '../actions/'
import MyData from './MyData'


const MyDataList = (props) => {
    console.log (`MyDataList`, props)

    useEffect(()=> {
        props.getData()
    }, [])

    if (props.isLoading){
        return (
            <h3>Loading Breweries....../\/\/\/\/\/\</h3>
        )
    }


    return (
        <div className='my-div'>
            {props.error && <p>{props.error}</p>}
            {props.data.map(fact => (
                <MyData key={fact.id} fact={fact}/>
            ))}
        </div>

    )
}

const mapStateToProps = state => {
    console.log('mapstate', state)
    return {
        isLoading: state.isLoading,
        error: state.error,
        data: state.data
    }
}


export default connect (mapStateToProps, {getData})(MyDataList)