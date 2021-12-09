@echo off
echo -----------         
echo Login...
echo -----------        
bx login -u egil.larsen@dk.ibm.com -a cloud.ibm.com -o egil.larsen@dk.ibm.com -s dev -r eu-de --apikey %ERLCODEENGINEAPI% 
@echo on
bx cr login
docker build -t zaki .
docker tag zaki icr.io/erlregistry/zaki:latest
docker push icr.io/erlregistry/zaki:latest
bx target -g faros
bx ce proj select -n faros
bx ce app create -n zaki -p 3000 -i  icr.io/erlregistry/zaki:latest --rs ibm-registry-faros 
REM bx ce app update -n zaki -e Deployed="%date%+%time%"
