import React from 'react'
import './style/App.css'
import Button from 'react-bootstrap/Button'

export default function dashboard({logout}) {
    return (
        <div className ="dashboard">
            <h1>You are successfully authenticated</h1>
            <Button variant ="danger" className="button" onClick={logout} >Logout</Button>
        </div>
    )
}
