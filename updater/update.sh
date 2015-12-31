#!/bin/bash
#By Vincent Lee / vlee489
#(c) of Vincent Lee 2015
#See LICENSE file for copyright and license details
#Part of Ignition http://ignition.io

#Version 6.0

#May need to be exicuted with root privlages.
#Root maybe required depending on where Ignition is stores.

#Constants
#------------------------
Directory="/opt"
IgnitionName="ignition"
#Github repos used to update (Not needed)
GitRepositoryBase="https://github.com/alexjstubbs"
BaseRepositoryName="ignition-dev"
#------------------------
#Colours
#------------------------
red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`
reset=`tput sgr0`
#------------------------


while test $# -gt 0; do
        case "$1" in
                -h|--help)
                        echo "The Nexus Updater 2.0"
                        echo "options:"
                        echo "-h | --help                show brief help"
                        echo "-s | --stable               Updates Igntion for the stable branch"
                        echo "-n | --nightly              Update Ignition from the nighly branch"
                        exit 0
                        ;;
       --stable|-s)
                        clear
                        echo "${green}Updading from Git Repository${reset}"
                        echo "${green}Updating from Stable branch${reset}"
                        echo "${red}Do NOT turn off${reset}"
                        #If the directry it is trying to change
                        #to doesn't exsitst
                        #then it will exit the script.
                        cd $Directory/$IgnitionName || exit
                        #Change "stable" if another branch is desiered
                        git pull stable
                        echo "${green}Update complete!${reset}"
                        exit 0
                        ;;
      --nightly|-n)
                        clear
                        echo "${green}Updating from Git Repository${reset}"
                        echo "${blue}Updating from Nightlies branch${reset}"
                        echo "${red}Do NOT turn off${reset}"
                        #If the directry it is trying to change
                        #to doesn't exsitst
                        #then it will exit the script.
                        cd $Directory/$IgnitionName || exit
                        #Change "nightly" if another branch is desiered
                        git pull nightly
                        echo "${green}Update complete!${reset}"
                        exit 0
                        ;;
                *)
                        echo "${red}Try 'update.sh --help' for help${reset}"
                        break
                        ;;
        esac
done
