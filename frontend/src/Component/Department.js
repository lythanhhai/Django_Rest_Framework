import React from 'react'
import '../Asset/Department/Department.scss'
import ModalAdd from './ModalAdd'

const Department = () => 
{
    const dataDepartmentElement = [].map((department, index) => {
        const {DepartmentId, DepartmentName} = department
        return(
                <tr key={index}>
                    <td className='data'>{DepartmentId}</td>
                    <td className='data'>{DepartmentName}</td>
                </tr>
        );
    })
    return(
        <section className='Department'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='head'>DepartmentId</th>
                        <th className='head'>DepartmentName</th>
                        <th className='head'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {dataDepartmentElement}
                </tbody>
            </table>
            <button type='submit' className='Button'>Add Department</button>
            <ModalAdd />
        </section>
    );
}

export default React.memo(Department)