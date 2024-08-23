// Models for the Robots Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'The connection to the MongoDB robot data server failed.' });
    } else  {
        console.log('Success: The connection to the MongoDB robot data server was successful.');
    }
});

// SCHEMA: Define the collection's schema.
const deliveryRobotSchema = mongoose.Schema({
	robotID:    { type: String, required: true },
	deliveryTime:     { type: Date, required: true },
	numberOfPackages: { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "deliveryRobots".
const deliveryRobots = mongoose.model('DeliveryRobots', deliveryRobotSchema);


// CREATE model *****************************************
const createDeliveryRobot = async (robotID, deliveryTime, numberOfPackages) => {
    const deliveryRobot = new deliveryRobots({ 
        robotID: robotID,
        deliveryTime: deliveryTime, 
        numberOfPackages: numberOfPackages 
    });
    return deliveryRobot.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveDeliveryRobot = async () => {
    const query = deliveryRobots.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveDeliveryRobotByID = async (_id) => {
    const query = deliveryRobots.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteDeliveryRobotById = async (_id) => {
    const result = await deliveryRobots.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateDeliveryRobot = async (_id, robotID, deliveryTime, numberOfPackages) => {
    const result = await deliveryRobots.replaceOne({_id: _id }, {
        robotID: robotID,
        deliveryTime: deliveryTime,
        numberOfPackages: numberOfPackages
    });
    return { 
        _id: _id, 
        robotID: robotID,
        deliveryTime: deliveryTime,
        numberOfPackages: numberOfPackages
    }
}

// EXPORT the variables for use in the controller file.
export { createDeliveryRobot, retrieveDeliveryRobot, retrieveDeliveryRobotByID, updateDeliveryRobot, deleteDeliveryRobotById }