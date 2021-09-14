This is an eaxmple ui framework for one of a ebay website scenario using mocha, typescript, webdriverio and chai.

Dependencies:

    Make sure you have :->
        node 12+ and npm installed. 
        JDK8+ installed.
        Chrome installed.

Note: 
Run and tested on MacOS Big Sur (Version 11.4)

Running Tests:

Checkout the code from repo.

Navigate to project directory : `<HOME/CLONEPATH>`

Install dependencies : `npm install`

Running tests : `npm run test` (opens reports if tests passes)
If Tests fails please run report using:
Running reports :  `npm run reports`

Note : - 
It can be run on local machine/sauce lab based on config you pick.
tests can be executed in parallel by tweaking `maxInstances` value but currently its set to run sequential.

Please update the password & userId correctly :->  "data > Users.ts > userId & password (values)".
