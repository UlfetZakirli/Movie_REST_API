# Movie_REST_API

### ***Dependencies Installation***
* cors
* dotenv
* express
* nodemon
* colors
* mongoose

### ***Project Structure***

<img width="571" alt="s" src="https://user-images.githubusercontent.com/88549805/215155934-bef5323e-8de4-4496-ac51-7294dc90901e.png">


### ***Database Setup***

To set up a new database you will need to have a MongoDB account. It’s FREE to register and they give you a FREE cluster to try out. [Navigate to the official website.](https://www.mongodb.com/)

Your dashboard should look similar to the picture below minus the cluster. We need to create one. Click on ‘+ Create‘ to create your free cluster. I won’t go into details on how to do that since is fairly straightforward. Once you are done, go back to your dashboard and you should see your cluster just like I have in the image below.
<img width="936" alt="Untitled" src="https://user-images.githubusercontent.com/88549805/215154606-5ff73f94-bc8f-4aa0-94ab-209bcf5ef286.png">

The next very important bit is to allow Network Access. You will only be able to connect to your cluster from the IP Addresses you assign.

You can simple click on **‘+ ADD IP ADDRESS‘** and add yours there.

Next, we need Database Access. Click on the Database Access tab and create a new user and a password unless you already have one. You will need to have both to make the database connection later.

### ***Databse Connection & Category Schema***
MONGODB_URI = mongodb+srv://ulfat:<password>@cluster0.6m5cz.mongodb.net/Movies?retryWrites=true&w=majority




