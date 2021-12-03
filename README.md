
# Percy Assignment

Using Percy to perform visual comparison between two environments URLs

1) Prod - https://www.browserstack.com

2) Non-Prod - https://k8s.bsstag.com/ 
## Endpoints to compare
- 1 /

- 2 /pricing

- 3 /integrations/automate

- 4 /docs 
## Browsers used

- 1 . Firefox 
- 2 . Chrome
- 3 . Safari 

## Documentation

[Percy document to compare two environment](https://docs.percy.io/docs/comparing-two-urls-to-each-other)

[Assignment link](https://browserstack.atlassian.net/wiki/spaces/CE/pages/1812693491/Technical+Product+Training)

[Percy docs](https://docs.percy.io/docs/cypress)
## Environment Variables

To run this project, you will need to set the token

`PERCY Token` : Percy app>  Projet setting



##  Steps:

- 1 Login into percy and create a demo account
- 2 For installing necessary dependencies follow percy document in the documentation
- 3 Create a test script for above assignment using any SDK
- 4 Create two branches i.e. PERCY_BRANCH and PERCY_TARGET_BRANCH
- 5 PERCY_BRANCH = https://www.browserstack.com, PERCY_TARGET_BRANCH = https://k8s.bsstag.com/ 
- 6 Link the repo with the percy app > integrations, in the project setting we can change the branch settings keep the default base branch = PERCY_BRANCH and auto approve branch = PERCY_BRANCH
- 7 Before running the test - use export token command, which can be found in Percy app-> Project_setting
- 8 Run the test using the following command - npm run test and push the code on PERCY_BRANCH
- 9 Change the url, run the test and push the code to PERCY_TARGET_BRANCH
- 10 CHeck on percy app, there will be comparision of the two builds.


## Technologies used:

- 1  Cypress
- 2  Percy
## Authors

- [@Anic10](https://www.github.com/octokatherine)

