---
title: "Dissertation"
date: "2020-01-01"
built_using:
  - Python
  - Raspberry Pi
  - OpenCV
  - PyTorch
demo_links: [{ text: "View Source", src: "" }]
featured_image: /dissertation-hero-light.png
short_desc: ""
long_desc: "I completed this dissertation as part of my MSc Artificial Intelligence Degree. The dissertation focuses on building a motion-sensing camera device using Raspberry Pi that detects and classifies wildlife. I used OpenCV's frame difference method to detect motion in a set of frames coming from a live camera stream. The detected motion is then classified into one of the 20 animal classes using a CNN (Convolutional Neural Network) based classification model."
---

### Background Information

Monitoring wildlife and their habitat is of paramount importance in understanding the effects of several natural phenomena. For instance, butterflies are early indicators of the effects of climate change. Similarly, wildlife monitoring is also critical in preserving endangered animals, understanding their behaviours and reducing poaching activities. The dissertation aimed to build an inexpensive motion sensing device that is also capable of recognizing animals it records. You can download the full copy of the dissertation document [here](https://google.com).

### Tech Stack

I used raspberry pi as the main computing device due to its small size and portability. A camera module is integrated into the Raspberry Pi to record the wildlife environment. Two sets of Python packages are written; one detects motion that is potentially caused by animals and the other classifies captured images. The motion sensing packages used OpenCV's average running background technique to compute differences in a series of frames. The image classification model uses Pytorch to train a CNN model on a dataset of 20 animal classes and achieves an accuracy of 82%.

### Learnings and Thoughts

neural networks are widely used in image data analysis. Understanding the underlying mechanism of CNNs and exploring various popular variants, such as AlexNet, LeNet, and MobileNets, is very informative. Moreover, I have always been fascinated by Raspberry Pi and related hardware devices, but I have never built anything with them. Through this project, I gained hands-on experience and learned a lot about Raspberry Pi.
