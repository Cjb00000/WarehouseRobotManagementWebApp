import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import DeliveryRobotList from '../components/deliveryRobotList';
import { Link } from 'react-router-dom';

function LogPage({ setDeliveryRobot }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [deliveryRobots, setDeliveryRobots] = useState([]);

    const loadDeliveryRobots = async () => {
        const response = await fetch('/deliveryRobots');
        const deliveryRobots = await response.json();
        setDeliveryRobots(deliveryRobots);
    } 
    

    // UPDATE a single 
    const onEditDeliveryRobot = async (robot) => {
        setDeliveryRobot(robot);
        redirect('/update');
    }


    // DELETE a single  
    const onDeleteDeliveryRobot = async _id => {
        const response = await fetch(`/deliveryRobots/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/deliveryRobots');
            const deliveryRobots = await getResponse.json();
            setDeliveryRobots(deliveryRobots);
        } else {
            console.error(`'Failed to delete delivery robot:' ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD 
    useEffect(() => {
        loadDeliveryRobots();
    }, []);

    // DISPLAY 
    return (
        <>
            <h2>Track Robot Deliveries</h2>
            <p>This is a list of delivery robot data. It includes a robot's ID with its associated data, including the robot's last delivery date and the number of packages delivered.
                You can add a new robot, delete a robot, or update information on a current robot.
            </p>
            <Link to="/create">Add Delivery Robot</Link>
            <DeliveryRobotList
                deliveryRobots={deliveryRobots}
                onEdit={onEditDeliveryRobot}
                onDelete={onDeleteDeliveryRobot}
            />
        </>
    );
}

export default LogPage;