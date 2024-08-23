// Controllers for the deliveryRobots Collection

import 'dotenv/config';
import express from 'express';
import * as deliveryRobots from './robots-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/deliveryRobots', (req,res) => { 
    deliveryRobots.createDeliveryRobot(
        req.body.robotID, 
        req.body.deliveryTime, 
        req.body.numberOfPackages
        )
        .then(deliveryRobot => {
            console.log(`Delivery by robot ${deliveryRobot.robotID} with ${deliveryRobot.numberOfPackages} packages was added to the collection.`);
            res.status(201).json(deliveryRobot);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add the delivery robot.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/deliveryRobots', (req, res) => {
    deliveryRobots.retrieveDeliveryRobot()
        .then(deliveryRobots => { 
            if (deliveryRobots !== null) {
                console.log(`All delivery records were retrieved.`);
                res.json(deliveryRobots);
            } else {
                res.status(404).json({ Error: 'No delivery robot records found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve delivery robot records.' });
        });
});


// RETRIEVE by ID controller
app.get('/deliveryRobots/:_id', (req, res) => {
    deliveryRobots.retrieveDeliveryRobotByID(req.params._id)
    .then(DeliveryRobot => { 
        if (DeliveryRobot !== null) {
            console.log(`"${DeliveryRobot.robotID}" was retrieved, based on its ID.`);
            res.json(DeliveryRobot);
        } else {
            res.status(404).json({ Error: 'No delivery robot found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve delivery robot record' });
    });

});


// UPDATE controller ************************************
app.put('/deliveryRobots/:_id', (req, res) => {
    deliveryRobots.updateDeliveryRobot(
        req.params._id, 
        req.body.robotID, 
        req.body.deliveryTime, 
        req.body.numberOfPackages
    )
    .then(DeliveryRobot => {
        console.log(`Delivery record for "${DeliveryRobot.robotID}" was updated.`);
        res.json(DeliveryRobot);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update delivery record.' });
    });
});


// DELETE Controller ******************************
app.delete('/deliveryRobots/:_id', (req, res) => {
    deliveryRobots.deleteDeliveryRobotById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} delivery robot was deleted.`);
                res.status(200).send({ Success: 'Delivery robot record deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'No delivery robot record found to delete.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to delete the delivery robot record.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});