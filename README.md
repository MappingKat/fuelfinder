FuelFinder:
============
##The Place to Find and Review Alternative Fuel stations

This site can be found at www.fuelfinder.tk.  It is a site dedicated to finding alternative fuel' stations in your area. 

Homepage
-------

![Homepage](https://www.evernote.com/shard/s341/sh/ae410ffa-ca87-46a5-8849-0d931ea7bd32/5a217066fe22a75d4a87f4392fd0a4ab/deep/0/FuelFinder.png" alt="FuelFinder)


Admin Page
-----------
![station](https://www.evernote.com/shard/s341/sh/0e095ecd-21cb-4f4e-a192-568e215a4d06/cd7d525006f3e6937bfce4544f50f88f/deep/0/FuelFinder--Find-Alternative-Fuel-Stations.png" alt="FuelFinder:%20Find%20Alternative%20Fuel%20Stations)


##Cloning the project

To checkout this project, get the code:

`git clone git@github.com:MappingKat/FuelFinder.git` (you should also grab the other services: to-the-station and reviews-api)

Go into the directory:

`cd FuelFinder`

Install all of the gems:

`bundle`

You will also need to grab the reviews-API... and the admin section... 
Make sure PostgreSQL is running on your local machine. The easiest way to get up and running is to set up foreman (install gem foreman) and nginx after you've cloned all of the API repositories.  Once these steps are complete and you have nginx running (sudo nginx), you can...

`foreman start`

Go to 'localhost:8080' to checkout the site.

*Project built on Rails 4.0.0 with a custom front end.*
