# Pipeline

    CircleCi is used to build the CI/CD pipeline.

## Pipeline process

    1.  Build and Test scripts will be executed while opening a new pull request or submitting a commit to an existing pull request. The pipeline execution state will be available in the pull request page.
    2.  After successful execution of build and test scripts pull request can be merged to the main.
    3.  For all the commits merged to main, built and test scripts will be executed and finally deployed into respective services.

    -   Using the ubuntu linux machine environment to setup the docker with postgres to run the server tests.
    -   Using the same ubuntu linux machine environment to run the ui tests.
    -   Using base stable docker image to deploy the production code.

## Diagram

    -   [Pipeline diagram]()
