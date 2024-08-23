import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function DeliveryRobot({ robot, onEdit, onDelete }) {
    return (
        <tr>
            <td>{robot.robotID}</td>
            <td>{robot.deliveryTime?.slice(0, 10) || ''}</td>
            {/* .deliveryTime?.slice(0, 10) || '' covers if cannot slice the value, just puts in a null string to avoid error*/}
            <td>{robot.numberOfPackages}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever onClick={() => onDelete(robot._id)} /></td>
            <td><MdEdit onClick={() => onEdit(robot)} /></td>
        </tr>
    );
}

export default DeliveryRobot;