---
title: Timeline
description: Learn about what we have done since the beginning of the project.
---

## 2023.12 - 2024.01

- Decide to use Nvidia Jetson Nano as the main computer.
- Design & Finish the basic structures (3D Model).
- First design of the propulsion system (motors).
- Start development of the control system. Finish driver for the motors (Python).

## 2024.07 - 2024.08

- First version of the control system
  - a simple WebSocket data-transfer server written in Python
  - Web interface written with React 
- First design of the Power Management System
  - battery connect to a main switch, controlling power to two motors and a transformer to power the Jetson Nano
- First prototype
  - hull built with two PVC tubes, connected by 3D-printed parts
- First launching test
  - the control system work oppositely 🤣
  - motors got stuck in the aquatic plants

## 2024.12 - 2025.01

- Decide to migrate the system to ROS2 to speed up the development and improve scalability.
