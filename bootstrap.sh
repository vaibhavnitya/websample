#!/bin/sh
apt-get update  # To get the latest package lists
apt-get install nodejs-legacy -y
apt-get install npm -y
npm run start -y
#etc.