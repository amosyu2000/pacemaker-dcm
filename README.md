# Pacemaker Device Controller-Monitor

### SFWRENG 3K04 Lab 4 Team 2

Group Members
- [Aaron Li](https://github.com/aaronhsli) (lia79)
- [Manny Lemos](https://github.com/MannyLemos) (lemosm1)
- [Fady Zekry Hanna](https://github.com/fzhanna) (zekryhf)
- [Amos Yu](https://github.com/amosyu2000) (yua25)
- [Andy Pham](https://github.com/aonday) (phama8)

## About

The pacemaker design project is a large portion of the SFWRENG 3K04 Software Development course. The Device Controller-Monitor (DCM) will provide a user interface for programming and performing telemetry with a pacemaker. It is built using Vue and Electron. 

## Demo

A demo of the DCM in action can be found on YouTube [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ). See also the included screenshots below.

![Login Page](https://user-images.githubusercontent.com/46848538/101964209-9d229580-3bde-11eb-86eb-6929462a7a74.jpg "Login Page")
![Dashboard](https://user-images.githubusercontent.com/46848538/101964211-9dbb2c00-3bde-11eb-9252-031a3caad8ee.jpg "Dashboard")
![Settings Page](https://user-images.githubusercontent.com/46848538/101964210-9dbb2c00-3bde-11eb-90fc-9f5578750e00.jpg "Settings Page")

## Installation

To launch the project locally, the first thing you will need is my file containing a bunch of secret keys. Without it, the project won't be able to connect to the DCM API and you'll be stuck at the login page. However, unless you're part of the project, or you're the TA marking us, it's unlikely that you'll get that file off of me.

Next, you'll need Node.js installed on your machine. Once you do, follow these steps:

1. Download the repository from the master branch on GitHub
2. Extract the .zip
3. Run `npm install` in the root directory (where the package.json file is found)
4. Run `npm run rebuild` in the root directory (this will rebuild the `serialport` library so that is compatible with the Electron Node.js environment)
5. Run `npm run electron:serve` in the root directory

## License

Find the license file [here](https://github.com/amosyu2000/pacemaker-dcm/blob/main/LICENSE).
