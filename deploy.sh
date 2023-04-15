#!bash
# gcloud functions deploy nodejs-http-function3 \
# --gen2 \
# --region=asia-east2 \
# --runtime=nodejs18 \
# --source=index.js \
# --entry-point=helloWorld \
# --trigger-http --allow-unauthenticated

npm run build

gcloud functions deploy nodejs-http-function5 \
--region=asia-east2 \
--runtime=nodejs18 \
--entry-point=helloWorld \
--trigger-http --allow-unauthenticated

