import React from 'react';
import DeliveryRobot from './DeliveryRobot';

function DeliveryRobotList({ deliveryRobots, onDelete, onEdit }) {
    return (
        <table id="deliveryRobots">
            <caption>Add, Edit, and Delete Delivery Robots</caption>
            <thead>
                <tr>
                    <th>Robot ID</th>
                    <th>Delivery Time</th>
                    <th>Number of Packages</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {deliveryRobots.map((robot, i) => 
                    <DeliveryRobot 
                        robot={robot} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />
                )}
            </tbody>
        </table>
    );
}

export default DeliveryRobotList;
