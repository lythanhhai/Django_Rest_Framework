import React from 'react'
import '../Asset/ModalAdd/ModalAdd.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ModalAdd = ({showModal}) => {
    const [departmentName, setDepartmentName] = useState("")
    const handleAddDepartment = () => {
        const Department = {
            DepartmentName: departmentName,
        }
        axios.post(`http://localhost:8000/Department/`, Department)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return(
        <section className={showModal === true ? 'Modal__Show' : 'Modal__Hide'}>
                <h3>Add Department</h3>
                <hr></hr>
                <form className='Input__Name' onSubmit={() => {handleAddDepartment()}} method="POST">
                    <label htmlFor='department__name'>Department Name: </label>
                    <input name="department_name" placeholder="Enter DepartmentName" onChange={
                        (e) => {setDepartmentName(e.target.value)}
                        }></input>
                    <button type='submit'>Add</button>
                </form>
        </section>
    );
}

export default React.memo(ModalAdd)