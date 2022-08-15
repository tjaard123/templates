# Opinionated templates

Opinionated start templates with basics included like http client, state containers, styling etc.

- [React](./react) - Single page web app
- [Phaser](./phaser) - Web gaming engine
- [Express](./express) - Nodejs http server
- [Websocket](./websocket) - Websocket server

## Recommended hosting

Host the container with AWS app runner with a few clicks:

- [AWS App runner](https://docs.aws.amazon.com/apprunner/latest/dg/service-source-image.html)

## Deployment

I've created some helper scripts to deploy your docker image to ECR.

**Inside scripts directory:**
```sh
# Create an ECR repository
AWS_PROFILE=dev ./create-ecr.sh tjaard/awesome-app

# Build & push your docker image
AWS_PROFILE=dev ./build-push.sh tjaard/awesome-app ../express/
```

## TODO:
- Websocket server & client
- Phaser arcade example
- Dockerize phaser