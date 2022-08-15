# Example usage: AWS_PROFILE=dev ./create-ecr.sh tjaard/awesome-app

if [ -z "$1" ]
  then
    echo "Type the AWS ECR (Docker) repository, e.g. tjaard/awesome-app"
    read REPOSITORY
  else
    REPOSITORY=$1
fi

REGION=eu-west-1

# Print the AWS account
aws iam list-account-aliases

# Create ECR repository
aws ecr create-repository \
    --repository-name $REPOSITORY \
    --image-scanning-configuration scanOnPush=true \
    --region $REGION