## FullStack project to create a job-portal using MERN stack.
<a href="https://remarkable-alfajores-5f40fd.netlify.app/"> https://remarkable-alfajores-5f40fd.netlify.app/ </a> <br><br>
To run the project locally 
<ul>
  <li> Clone the repository in local computer. </li>
  <li> run – “npm install” in the project directory to download all the dependencies.  </li>
  <li> Make sure to check, live hosted database is working or not. You can create your own local instance of Mongo Database to test on your database. (Explained below)</li>
  <li> If you are using your local database, make sure to change baseURL in respective .jsx files.</li>
  <li> After everything has done, start the node server by running <b>“npm run dev”</b> in same project directory. </li>
</ul>

### Structure of MongoDB database..
1 jobs collection with all the details of a job stored as a document. You can check schema in jobs-backend/models/Job.js for more details. 



### Functionality of API 
API - https://jobs-portal.ced19i028sumit.repl.co

CRUD operations can be performed on Jobs. Validations and checks on input values has also been implemented.


### Create a job. [POST Method]
<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/add </a>

<b> structure of body to be passed. </b>
```
      {
        "title": "Marketing Coordinator",
        "location": "New York, NY",
        "type": "Part-Time",
        "aboutRole": "Our fast-growing marketing team is seeking a Marketing Coordinator to support our efforts in driving brand awareness and customer acquisition. The ideal candidate should have experience in marketing, excellent communication skills, and be able to work in a fast-paced environment.",
        "responsibility": [
          "Assist with the creation and execution of marketing campaigns",
          "Collaborate with the team to develop content for various channels (e.g. social media, email, blog, etc.)",
          "Track and analyze campaign performance using analytics tools",
          "Manage project timelines and ensure deliverables are met on time",
          "Conduct research to support the development of marketing strategies"
        ],
        "offers": "We offer Competitive salary, Comprehensive benefits package, including medical, dental, and vision coverage, 401(k) retirement plan with company match, Paid time off and company holidays and Opportunity for growth and career advancement",
        "perks": [
          "Fun and creative work environment",
          "Company-sponsored events and outings",
          "Opportunities to attend industry events and conferences",
          "Free snacks and drinks"
        ],
        "employer_name": "XYZ Marketing Agency",
        "employer_phone": "5555551212",
        "employer_email": "jobs@xyzmarketing.com"
     }
```

You can change the length of <b> perks, responsibility</b> array according to you.



### Get all jobs. [GET Method]
<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/getfields </a> <br>

This will return only fields like ID, location, type and aboutRole. If you want full data you can access them through <br>
<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/get </a> <br>



### Find the Job [GET Method]
<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/find/:id </a> <br>
You will get whole details about the job.



### Update details of the Job [PATCH Method]
We can update either whole job details or just few fields of it using Patch method.

<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/update/:id </a> <br>

structure of body to be passed.
```
  {
    "title": "Marketing Coordinator",
    "location": "New York, NY",
  }
```


Here we want to update only <b> title and location </b>, you can pass whichever field you want to update



### Delete Job with all details [DELETE Method]
For deleting a job, we need to pass the id of the job as a parameter. 

<a href="#"> https://jobs-portal.ced19i028sumit.repl.co/api/jobs/delete/:id </a> <br>




