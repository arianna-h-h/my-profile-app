[View demo on Heroku](https://peaceful-dusk-77017.herokuapp.com/)

### Purpose
The purpose of this app is to fulfill the following requirements with a MERN app deployed on Heroku: 

* As a user I should be able to view a dashboard with your name, a profile picture and a description of yourself.
* As a user I should be able to update the following:
  - Name
  - Description of yourself
  - Profile Picture
- As a user I should be able to save the changes that I made to the above listed items.
- As a user, I should be able to view the profiles of anyone that has submitted/created a profile through the app.
- The backend should reflect changes that can be made.


### Assumptions/Challenges 
Since the required information was only a few fields of information, I decided to create the pages as cards on one page. I thought a page for each card would be too much and instead display a list. Otherwise, I did not focus much on the visual design and instead worked on making a functional app in a short time period. 

Building the app was fairly straightforward as far as functionality goes, but I was challenged by the deployment process on Heroku. While I've created several MERN crud apps, I have never deployed to Heroku and I first made the mistake of only deploying the frontend through the react-app buildpack. I ended up accidentally creating several apps on Heroku which caused a bit of a git nightmare. The best solution I found was to delete all of the apps and unlink them from the github repo and start over. After starting the heroku set up and deployment process anew, it only took a couple of minutes. Since I followed pretty standard react and node/express design, configuration and deployment was definitely the most challenging part of this project. 

Another challenge was the styling of the inputs in css. I had to google quite a few ways to select different inputs as I have not spent much time styling the specific input part of a form before. 

### Limitations
This project had a two day turn around so some tradeoffs had to be made, including:
* Simple design and poor user experience
  * Editing a field is not very intuitive 
* A lot of repetitive code on the front-end. With a little extra time, I could have refactored to reduce boilerplate. 
* No testing - I likely would have used Jest. 
* No authentication - I could have used github's OAuth authentication. 

### Future applications 
Aside from working on the limitations listed above, I could add a delete route. I could also allow a user to actually upload a picture to the database instead of uploading an image's string URL. 
