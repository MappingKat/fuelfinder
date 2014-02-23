FuelFinder:
============
##The Place to Find and Review Alternative Fuel stations

This site can be found at www.fuelfinder.tk.  It is a site dedicated to finding farmers' stations and fresh food in your area using USDA data. The end goal is to be able to provide crowd-sourced reviews of the stations so that FreshFinder users have a more complete picture of station information (e.g., what is sold, what past visitors found to be good, etc).

Homepage
-------

![Homepage](screenshot.png)


station Page
-----------
![station](https://s3.amazonaws.com/bearlyhungry/station.png)


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
