import React from 'react'
import { Users } from './Context';
import { Spin } from "react-loading-io";

export default function UserList() {
    return (
        <div className='container'>
            <h1 className='text-center'>
                List Of Users
            </h1>
            <Users>
                {
                    (users) =>{
                        console.log(users);
                        {
                            if(users.length === 0){
                                return <Spin style={{marginLeft : '45%', marginTop : '10%'}} size={100} color='#00008b' />
                            }
                            else{
                               return (
                                    <div className='row'>
                                        {
                                            users.map( (user,index)=>{
                                                return <div key={index} className='col-xs-12 col-sm-4 col-md-3'>
                                                            <div className="card my-2" >
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{user.username}</h5>
                                                                    <p className="card-text">Email : {user.email}</p>
                                                                    <p className="card-text">Website : {user.website}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                            })
                                        }
                                   </div>
                               )
                            }
                        }
                        
                    }
                }
            </Users>
        </div>
    )
}
