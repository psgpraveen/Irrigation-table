
---

# Irrigation System Scheduler

A modern web application to automate and visualize irrigation cycles for smart farms.  
Inspired by clean staff management dashboard UIs.

![UI Screenshot with your actual screenshot path -->

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [License](#license)

---

## Overview

**Irrigation System Scheduler** helps you plan and monitor watering cycles for multiple crop plots using available motors, within a configurable daily window.  
The UI is inspired by modern HR dashboards for clarity and ease of use.

---

## Features

- 🗓️ **Dynamic Irrigation Chart**: Auto-generates a schedule based on user inputs.
- 🚦 **Real-time Status**: See if a cycle is Pending, In Progress, or Done.
- 🔍 **Filtering**: Filter cycles by plot and by status.
- 📱 **Responsive Design**: Works on desktop and mobile.
- 🎨 **Modern UI**: Clean, card-based layout with color-coded status.

---

## Demo

[Live Demo Link (Netlify/GitHub Pages)](https://your-demo-link.com) 

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v7+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/irrigation-system.git
   cd irrigation-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Usage

1. **Enter irrigation parameters**:  
   - Number of plots  
   - Number of motors in parallel  
   - Start and end time (military format, e.g., 060000)  
   - Motor runtime (minutes)  
   - Cycle interval (minutes)

2. **View your schedule**:  
   The app generates a table showing when each plot will be irrigated, by which motor, and the real-time status.

3. **Filter**:  
   Use the dropdowns to filter by plot or by status (Done, In Progress, Pending).

---

## Project Structure

```
/src
  /components        # React components (InputForm, FilterBar, Table, etc.)
  /hooks             # Custom React hooks
  /styles            # CSS files for each component
  App.jsx            # Main app component
  index.js           # Entry point
  utils.js           # Utility functions
```

---

## Technologies

- React
- CSS (no preprocessors)
- JavaScript (ES6+)
- [Create React App](https://github.com/facebook/create-react-app)

---

## Screenshots

![Main UIlace with your actual screenshot path -->


[Image1](./src/assets/image1.png)
[Image2](./src/assets/image.png)

---

## License

This project is for educational and evaluation purposes only.

---

