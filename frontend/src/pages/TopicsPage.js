import React from 'react';

function TopicsPage() {
   return (
<>
    <section>
        <h2>Robotics and Computer Vision Concepts</h2>
        <nav class="local">
            <a href="#robotics">Robotics</a>
            <a href="#computerVision">Computer Vision</a>
            <a href="#pathfinding">Pathfinding</a>
            <a href="#deepLearning">Deep Learning in Vision</a>
            <a href="#slam">SLAM (Simultaneous Localization and Mapping)</a>
        </nav>
    </section>
    <article id="robotics">
        <h3>Robotics</h3>
        <p>
            Robotics involves designing, constructing, and operating robots. Key areas in robotics include <strong>robot kinematics</strong>, which deals with the motion of robots, and <strong>robot dynamics</strong>, which involves the forces and torques required for movement. Robots are often programmed using <strong>ROS (Robot Operating System)</strong>, a flexible framework that provides libraries and tools to help build robot applications. Additionally, <strong>sensor integration</strong> is crucial for robots to perceive their environment, using sensors such as LiDAR, cameras, and IMUs (Inertial Measurement Units).
        </p>
    </article>
    <article id="computerVision">
        <h3>Computer Vision</h3>
        <p>
            Computer vision is a field that enables machines to interpret and make decisions based on visual data from the world. Key concepts in computer vision include <strong>image processing</strong>, which involves manipulating images to enhance or extract information, and <strong>object detection</strong>, which involves identifying and locating objects within images. Advanced techniques involve <strong>image segmentation</strong>, which partitions an image into distinct regions for analysis, and <strong>feature extraction</strong>, which identifies important aspects of images for tasks such as recognition and classification.
        </p>
    </article>
    <article id="pathfinding">
        <h3>Pathfinding</h3>
        <p>
            Pathfinding in robotics and computer vision involves determining the best path for a robot or an object to reach a goal. Algorithms such as <strong>A* (A-star)</strong> and <strong>Dijkstra's algorithm</strong> are commonly used to calculate the shortest path in a grid or graph. <strong>Navigation</strong> combines pathfinding with real-time obstacle avoidance, using techniques like <strong>Dynamic Window Approach (DWA)</strong> and <strong>Rapidly-exploring Random Trees (RRT)</strong> to adapt to changing environments and obstacles.
        </p>
    </article>
    <article id="deepLearning">
        <h3>Deep Learning in Vision</h3>
        <p>
            Deep learning is a subset of machine learning that uses neural networks with many layers to analyze complex data. In computer vision, <strong>Convolutional Neural Networks (CNNs)</strong> are particularly effective for tasks such as image classification, object detection, and image segmentation. Training deep learning models involves using large datasets and GPUs to perform computations. Techniques such as <strong>transfer learning</strong> allow leveraging pre-trained models for specific vision tasks, significantly reducing the time and data required for training.
        </p>
    </article>
    <article id="slam">
        <h3>SLAM (Simultaneous Localization and Mapping)</h3>
        <p>
            SLAM is a technique used by robots and autonomous vehicles to build a map of an unknown environment while simultaneously keeping track of their location within it. Key components of SLAM include <strong>mapping</strong>, which involves creating a representation of the environment, and <strong>localization</strong>, which determines the robot's position relative to the map. SLAM algorithms, such as <strong>Extended Kalman Filter (EKF)</strong> and <strong>FastSLAM</strong>, use sensor data and probabilistic models to continuously update the map and the robot's location.
        </p>
    </article>
</>
   );
}

export default TopicsPage;