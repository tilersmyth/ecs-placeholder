# ECS Placeholder

Simple Node app intended to be Dockerized (image available: [`tilersmyth/ecs-placeholder:latest`](https://hub.docker.com/repository/docker/tilersmyth/ecs-placeholder/general)) and used for AWS ECS CDK deployment where project image isn't initially available (this will cause Fargate service to hang - described in more detail [here](https://github.com/aws/aws-cdk/issues/7746)). 

It's important that this placeholder's **port** and **health check endpoint** mirror those in the project you intend to deploy in ECS. 