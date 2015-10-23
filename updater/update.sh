#!/bin/bash
#By Vincent Lee / vlee489
#(c) of Vincent Lee 2015
#See LICENSE file for copyright and license details
#Part of Ignition http://ignition.io

#Version 5.0

#Needs to be exicuted with root privlages.

#Shortcuts
#defines place where Ignition is stored.
#------------------------
#Defines the Platform the it needs to update from
Platform="Pi2"
#Build is for either Stable/Nighly
Build="Stable"
#Defines where files are stored
Base="/opt/"
Ignition="/opt/ignition/"
#Place where the updater script and temp files are stored.
Updater="/opt/updater"
Updates="/opt/updater/updates/"
#Github repos used to update
GitRepositoryBase="https://github.com/alexjstubbs"
BaseRepositoryName="ignition-dev"
#Used for updating from a zip file from the web.
FileStore="http://ignition.vlee.me.uk"
UpdateFile="ignition.zip"
#Used for fixing the Ignition Directory if it fails to install correctly
FixStore="http://ignition.vlee.me.uk"
FixerFile="fixer.zip"
Fixer="/opt/updater/fixer"

clear
echo "Do not press CTRL + C Or You May Break You instillation Of Ignition!"
echo "Starting update in 3 seconds!"
sleep 3
cd $Updater
#Makes a directory to store the updates and changes directory into it.
mkdir updates
cd updates
#Removes the ignition  zip file and directory if it already exsitsts.
rm -rf ignition
rm -rf ignition.zip
#Goes to the update server to grab the newest version and unzips it.
