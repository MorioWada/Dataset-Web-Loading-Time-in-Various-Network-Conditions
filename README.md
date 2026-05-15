# Dataset-Web-Loading-Time-in-Various-Network-Conditions

## License
This dataset is released under the Creative Commons CC0 1.0 Universal license.
You are free to copy, modify, distribute, and use the data, even for commercial purposes, without asking permission.

Overview
This repository provides a dataset for analyzing client-side web page loading times under heterogeneous network conditions. The dataset compares performance results with and without image assets, highlighting the impact of media-heavy content on page responsiveness.

Purpose
The dataset is intended to support:
- Web performance research
- Network simulation studies
- Client-side measurement analysis
- User experience evaluation

It can be used by researchers, developers, and students to benchmark, reproduce experiments, and explore optimization strategies for web delivery.

Contents
- Network Conditions:
  - High throughput, low latency, low loss
  - High throughput, low latency, high loss
  - High throughput, high latency, low loss
  - High throughput, high latency, high loss
  - Low throughput, low latency, low loss
  - Low throughput, low latency, high loss
  - Low throughput, high latency, low loss
  - Low throughput, high latency, high loss

High throughput = 100Mbps, low throughput = 5Mbps

High latency = 300ms, low latency = 10ms

High loss = 5%, low loss = 0%

- Metrics Recorded:
  - Number of requests
  - Total Transfered (to make sure everything is reloaded via network, not cache)
  - Resources (should be the same as total transfered)
  - Finish time
  - DOMContentLoaded time
  - Load time
- Web Variants:
  - Many but small images
  - Few but large images

Data collection procedure
1. Create a webpage (controlled).
2. Choose a network profile (one of eight).
3. Load the page in Baseline Mode (extension inactive).
4. Record all performance metrics.
5. Load the same page in Optimized Mode (extension active).
6. Record all performance metrics again.
7. Repeat steps 3 to 6 100 times per condition to reduce noise.
8. Repeat the entire process for:
  - both image configurations (many small vs few large)
  - all eight network profiles
