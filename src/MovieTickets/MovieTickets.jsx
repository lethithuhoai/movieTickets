import React from 'react'
import ChairList from './ChairList'
import Result from './Result';
import data from './data.json'

const MovieTickets = () => {
    return (
        <div className='container'>
            <h1 className='mt-5'>MovieTickets</h1>
            <br />
            <br />
            <div className="row">
                <div className="col-8">
                    <div className='screen p-2 fs-4 text-white text-center mb-3'>Screen</div>
                    <ChairList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    )
}

export default MovieTickets