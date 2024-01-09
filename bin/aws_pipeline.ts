#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CiCdAwsPipelineDemoStack } from '/Users/danielboabes/AWSPipeline/lib/aws_pipeline-stack';

const app = new cdk.App();
new CiCdAwsPipelineDemoStack(app, 'CiCdAwsPipelineDemoStack', {
  env: {
    account: '960421420326',
    region: 'us-east-1',
  }
});

app.synth();