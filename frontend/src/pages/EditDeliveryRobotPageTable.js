import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BiEdit } from 'react-icons/bi';

export const EditDeliveryRobotPageTable = ({ robotToEdit }) => {
    const [robotID, setRobotID] = useState(robotToEdit.robotID);
    const [deliveryTime, setDeliveryTime] = useState(robotToEdit.deliveryTime?.slice(0, 10) || '');
    // included ?.slice(0, 10) || '' to handle error if the date entered can not have slice applied
    const [numberOfPackages, setNumberOfPackages] = useState(robotToEdit.numberOfPackages);
    
    const redirect = useNavigate();

    const editDeliveryRobot = async () => {
        const response = await fetch(`/deliveryRobots/${robotToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                robotID: robotID, 
                deliveryTime: deliveryTime, 
                numberOfPackages: numberOfPackages
            }),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.status === 200) {
            alert(`Delivery robot edited successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit delivery robot. Status code: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/log");
    }

    return (
        <>
        <article>
        <h2>Edit a Delivery Robot</h2>
            <p>Update data on a warehouse robot including ID, the time packages were delivered, and the number of packages delivered.</p>
            <table id="deliveryRobots">
                <caption>Update Delivery Robot Data</caption>
                <thead>
                    <tr>
                        <th>Robot ID</th>
                        <th>Delivery Time</th>
                        <th>Number of Packages</th>
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
                            onClick={editDeliveryRobot}
                            id="submit"
                        >Edit</button>
                    </td> */}
                    <td>
                        <BiEdit onClick={editDeliveryRobot} />
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditDeliveryRobotPageTable;