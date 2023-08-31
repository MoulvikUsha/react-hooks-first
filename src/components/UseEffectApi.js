import React, { useState, useEffect } from 'react'

function UseEffectApi() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json())
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h2>
                List of Users
            </h2>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>
                    {
                        users.map((currentEle) => {
                            return (
                                <div className='col-10 col-md-3 mt-3' key={currentEle.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{currentEle.title}</h6>
                                            <img className='w-25' src={currentEle.thumbnailUrl} alt='missed'/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UseEffectApi