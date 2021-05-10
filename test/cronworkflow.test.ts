import { Chart, Testing } from 'cdk8s';
import * as temp from '../src/index';

test('CronWorkflow', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  new temp.ArgoWorkflowCronWorkflow(chart, 'flow', {
    metadata: {
      name: 'asd',
    },
    spec: {
      schedule: '* * * * *',
      concurrencyPolicy: 'Replace',
      startingDeadlineSeconds: 0,
      workflowSpec: {
        entrypoint: 'whalesay',
        templates: [{
          name: 'asd',
          container: {
            image: 'alpine:latest',
            name: 'asd',
            command: ['sh', '-c'],
            args: ['date; sleep 90'],
          },
        }],
      },
    },
  });

  expect(Testing.synth(chart)).toMatchSnapshot();
});