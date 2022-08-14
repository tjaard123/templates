REPOSITORY=tjaard/express-template
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
docker build -t $PUSH_URL/$REPOSITORY:latest .
docker push $PUSH_URL/$REPOSITORY:latest