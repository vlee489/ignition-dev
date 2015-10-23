#!/bin/bash
#By Vincent Lee / vlee489
#(c) of Vincent Lee 2015
#See LICENSE file for copyright and license details
#Part of Ignition http://ignition.io

#Git update
#Version 1.0

#May need to be exicuted with root privlages.
#Depending on where Igntion's files are held and if
#that directory needs Root to access

#Shortcuts
#defines place where Ignition is stored.
#------------------------
#Git repos used to update
GitRepositoryAdress="https://github.com/alexjstubbs"
BaseRepositoryName="ignition-dev"
#Where Igntion is stored and it's name
Directory="/opt"
IgnitionName="ignition"

clear
echo "Updading from Git Repository"
echo "Do NOT turn off"
echo "Updating in 3 seconds"
sleep 3
cd $Directory/$IgnitionName
#Add the branchname after the command bellow for anything other then the master branch.
git pull
