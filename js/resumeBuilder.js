/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Thomas Lim",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "myoungslim@gmail.com",
        "github": "github.com/myounglim",
        "twitter": "@johndoe",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "I am still learning",
    "skills": ["C++", "Java", "Problem Solving", "Web Development"],
    "biopic": "images/robin.png",
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    //$("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPicture);
    $("#header").append(formattedMessage);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
}

bio.display();

var education = {
    "schools": [{
        "name": "University of Southern California",
        "location": "Los Angeles, CA",
        "degree": "BS",
        "majors": ["Computer Science"],
        "dates": "2012-2017",
        "url": "http://www.usc.edu/"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/ud804"
    }]
}

education.display = function() {
    education.schools.forEach(function(entry) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", entry.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", entry.degree);
        var nameAndDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(nameAndDegree);
        $(".education-entry:last").children("a").attr("href", entry.url);
        var formattedLocation = HTMLschoolLocation.replace("%data%", entry.location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDate = HTMLschoolDates.replace("%data%", entry.dates);
        $(".education-entry:last").append(formattedDate);

        for (var i = 0; i < entry.majors.length; i++) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", entry.majors[i]);
            $(".education-entry:last").append(formattedMajor);
        }
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(entry) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", entry.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", entry.school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            var formattedDate = HTMLonlineDates.replace("%data%", entry.dates);
            $(".education-entry:last").append(formattedDate);
            var formattedURL = HTMLonlineURL.replace("%data%", entry.url);
            $(".education-entry:last").append(formattedURL);
            $(".education-entry:last").children("a").attr("href", entry.url);
        });
    }
}
education.display();

var work = {
    "jobs": [{
        "employer": "Flame Broiler",
        "title": "Cashier",
        "location": "El Segundo, CA",
        "dates": "2014 - 2015",
        "description": "Took orders and had various responsibilities around the store"
    }]
}

work.display = function() {
    work.jobs.forEach(function(entry) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", entry.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", entry.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", entry.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", entry.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDescription);
    });
}
work.display();

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "2016",
        "description": "Built a portfolio site using Responsive Design to showcase projects that I will be completing in the future",
        "images": [
            "images/portfolio-site.png"
        ],
        "url": "https://github.com/myounglim/Portfolio-Site"
    }, {
        "title": "Revamping an Old Appointment Site",
        "dates": "2016",
        "description": "Developed a new appointment site on the WordPress platform using newer standards of HTML5/CSS3",
        "images": [
            "images/appointment-site.png"
        ],
        "url": "https://github.com/myounglim/ViterbiScheduling"
    }]
}

projects.display = function() {
    projects.projects.forEach(function(entry) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", entry.title);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").children("a").attr("href", entry.url);

        var formattedDates = HTMLprojectDates.replace("%data%", entry.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", entry.description);
        $(".project-entry:last").append(formattedDescription);

        if (entry.images.length > 0) {
            for (var i = 0; i < entry.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", entry.images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    });
}
projects.display();

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);