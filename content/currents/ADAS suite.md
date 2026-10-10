---
created: 2026-10-11
tags:
  - mobility
  - Tech
status:
---

| Layer                         | Content                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| Sensors                       | Camera, millimeter-wave radar, ultrasonic sensors, LiDAR                            |
| Compute platform              | In-vehicle domain controller with an SoC                                            |
| Algorithm software            | Perception, prediction, planning and control, <br>or an integrated end-to-end model |
| Development toolchain         | Data collection, labeling, simulation, validation                                   |
| OEM integration & maintenance | Calibration, functional-safety certification, OTA                                   |

###### Radar
Radar uses millimeter-wave frequencies to measure an object's distance and speed. It is low-cost and has high weather tolerance. Weaknesses include low resolution and an inability to identify objects.

###### Camera
Cameras are most similar to human eyesight. They rely on neural networks to recognize visual data and understand nuances, such as spotting traffic lights, lane markings, and hand gestures. Weaknesses include their reliance on algorithms to calculate distance and low tolerance to adverse lighting conditions.

###### LiDAR 
LiDAR (Light Detection and Ranging) paints a 3D picture of the vehicle's surroundings by sending millions of laser pulses in all directions and measuring how long they take to bounce back off objects. Weaknesses include low weather tolerance, high cost, and difficulty in detecting certain object surfaces.

###### Some APPLIED FUNCTIONS

| Vertical |                             |
| -------- | --------------------------- |
| FCW      | Forward Collision Warning   |
| ACC      | Adaptive Cruise Control     |
| AEB      | Automatic Emergency Braking |

| Horizontal |                        |
| ---------- | ---------------------- |
| LKA        | Lane Keep Assist       |
| LDW        | Lane Departure Warning |
| BSD        | Blind Spot Detection   |

[Sources](https://waymo.com/waymo-driver/)