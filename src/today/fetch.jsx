import React, { useEffect, useState } from 'react'
import './fetch.css'

function Fetch() {

    const [data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((user)=>{
            setData(user);
            setLoading(false);
        })
    },[])

    const filterData = data.filter(data =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div>
        <center>
            <input style={{width:'40%',textAlign:'center'}}
            type='text'
            placeholder='Search by name'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            {loading ? (
                <p>loading.....</p>
            ):(
                <div>
                    {filterData.length === 0 ?(
                        <p>No Data Found</p>
                    ):(
                        <ul style={{listStyleType:'none'}}>
                            {filterData.map((data,id)=>(
                                <li key={id}>
                                    <p>Name : {data.name} , Email : {data.email}</p>
                                </li>
                            ))}
                        </ul>
                    )
                    }
                </div>
            )

            }
        </center>
    </div>
  )
}

export default Fetch
