console.log("Hello World!");



function sendMail(contactForm) {

    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };

    emailjs
    .send("service_q999nj4", "template_6uxut8l", templateParams)
    .then(
        (response) => {
            console.log(
                "SUCCESS!",
                response.status,
                response.text
            );
        },
        (error) => {
            console.log("FAILED...", error);
        }
    );

    return false;
}

/*
                

                emailjs
                    .send("service_q999nj4", "template_6uxut8l", templateParams)
                    .then(
                        (response) => {
                            console.log(
                                "SUCCESS!",
                                response.status,
                                response.text
                            );
                        },
                        (error) => {
                            console.log("FAILED...", error);
                        }
                    );
*/