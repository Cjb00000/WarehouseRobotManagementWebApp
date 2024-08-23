import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const AddDeliveryRobotPageTable = () => {
    const [robotID, setRobotID] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [numberOfPackages, setNumberOfPackages] = useState('');
    
    const redirect = useNavigate();

    const addDeliveryRobot = async () => {
        const newRobot = { robotID, deliveryTime, numberOfPackages };
        const response = await fetch('/deliveryRobots', {
            method: 'post',
            body: JSON.stringify(newRobot),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Delivery robot added successfully!`);
        } else {
            alert(`Failed to add delivery robot. Status code: ${response.status}`);
        }
        redirect("/log");
    };


    return (
        <>
        <article>
            <h2>Add a Delivery Robot</h2>
            <p>Input data for a new warehouse robot including ID, the time packages were delivered, and the number of packages delivered.</p>
            
            <table id="deliveryRobots">
                <caption>Input Delivery Robot Data</caption>
                <thead>
                    <tr>
                        {/*<th>Robot ID</th>
                        <th>Delivery Time</th>
                        <th>Number of Packages</th>*/}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><label htmlFor="robotID">Robot ID</label>
                        <input
                            type="text"
                            placeholder="Robot ID"
                            value={robotID}
                            onChange={e => setRobotID(e.target.value)} 
                            id="robotID" />
                    </td>

                    <td><label htmlFor="deliveryTime">Delivery Time</label>
                        <input
                            type="text"
                            placeholder="Delivery Time"
                            value={deliveryTime}
                            onChange={e => setDeliveryTime(e.target.value)} 
                            id="deliveryTime" />
                    </td>

                    <td><label htmlFor="numberOfPackages">Number of Packages</label>
                        <input
                            type="number"
                            placeholder="Number of Packages"
                            value={numberOfPackages}
                            onChange={e => setNumberOfPackages(e.target.value)} 
                            id="numberOfPackages" />
                    </td>

                    {/* <td>
                    <label htmlFor="submit">Commit</label>
                    <button
                        type="submit"
                        onClick={addDeliveryRobot}
                        id="submit"
                        >Add</button>
                    </td> */}
                    <td>

                        <AiOutlinePlusCircle onClick={addDeliveryRobot} />
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddDeliveryRobotPageTable;