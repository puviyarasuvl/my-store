pwd
ls
cd dist
ls
aws s3 cp --recursive --acl public-read ./dist/Mystore/ s3://mystore-frontend