REPOSITORY=tjaard/express-template
REGION=eu-west-1

# Print the AWS account
aws iam list-account-aliases

# Create ECR repository
aws ecr create-repository \
    --repository-name $REPOSITORY \
    --image-scanning-configuration scanOnPush=true \
    --region $REGION