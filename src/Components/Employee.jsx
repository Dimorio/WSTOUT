import React from 'react'

export const Employee = (props) => {
  return (
    <>
    <h3>Employee {props.name }</h3>
    <p> {props.role  ? props.role : <p>No Role</p>}</p>
    </>
  )
}
