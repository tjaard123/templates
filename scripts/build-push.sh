# Example usage: AWS_PROFILE=dev ./build-push.sh tjaard/awesome-app ../express/

if [ -z "$1" ]
  then
    echo "Type the AWS ECR (Docker) repository, e.g. tjaard/awesome-app"
    read REPOSITORY
  else
    REPOSITORY=$1
fi

if [ -z "$2" ]
  then
    echo "Type dockerfile location you'd like to build and push, e.g. ../express/"
    read DOCKERFILE
  else
    DOCKERFILE=$2
fi

REGION=eu-west-1

# Get current AWS account id
AWS_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)

# Construct push url
PUSH_URL="${AWS_ACCOUNT}.dkr.ecr.${REGION}.amazonaws.com"

# Print the AWS account
aws iam list-account-aliases

# Login to ECR
aws ecr get-login-password \
    --region eu-west-1 | docker login --username AWS --password-stdin $PUSH_URL

# Build & push
docker build -t $PUSH_URL/$REPOSITORY:latest $DOCKERFILE
docker push $PUSH_URL/$REPOSITORY:latest