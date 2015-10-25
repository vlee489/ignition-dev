#!/bin/bash
#By Vincent Lee / vlee489
#(c) of Vincent Lee 2015
#See LICENSE file for copyright and license details
#Part of Ignition http://ignition.io

#Git update
#Version 2.0

#May need to be exicuted with root privlages.
#Depending on where Igntion's files are held and if
#that directory needs Root to access

#Shortcuts
#------------------------
#Git repos used to update
GitRepositoryAdress="https://github.com/alexjstubbs"
BaseRepositoryName="ignition-dev"
#Where Igntion is stored and it's name
Directory="/opt"
IgnitionName="ignition"
#Defines commands used by the updater
1="nightly"
2="reinstall"

if [ ! -z "$1" ]
  then
      if [ ! -z "$2" ]
        then
            clear
            echo "Reinstalling Ignition"
            echo "Press (CTRL + C) to CANCEL"
            echo "Starting in 3 seconds"
            sleep 3
            cd $Directory || exit
            echo "Removing Igntion Install"
            rm -rf ignition
            clear
            echo "Installing Ignition"
            git clone -b nightly $GitRepositoryAdress/$BaseRepositoryName
        else
            clear
            echo "Updating from Git Repository"
            echo "Updating from Nightlies"
            echo "Do NOT turn off"
            echo "Updating in 3 seconds"
            sleep 3
            #If the directry it is trying to change
            #to doesn't exsitst
            #then it will exit the script.
            cd $Directory/$IgnitionName || exit
            #Change "nightly" if another branch is desiered
            git pull nightly
        fi
  else
    if [ ! -z "$2" ]
      then
          clear
          echo "Reinstalling Ignition"
          echo "Press (CTRL + C) to CANCEL"
          echo "Starting in 3 seconds"
          sleep 3
          cd $Directory || exit
          echo "Removing Igntion Install"
          rm -rf ignition
          clear
          echo "Installing Ignition"
          git clone -b stable $GitRepositoryAdress/$BaseRepositoryName
      else
          clear
          echo "Updating from Git Repository"
          echo "Updating from Nightlies"
          echo "Do NOT turn off"
          echo "Updating in 3 seconds"
          sleep 3
          #If the directry it is trying to change
          #to doesn't exsitst
          #then it will exit the script.
          cd $Directory/$IgnitionName || exit
          #Change "stable" if another branch is desiered
          git pull stable
      fi
fi
