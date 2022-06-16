
import { Chart, Testing } from 'cdk8s';
import * as temp from '../src/index';

test('Workflow', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');

  new temp.ArgoWorkflowWorkflowTemplate(chart, 'workflow', {
    metadata: {
      name: 'test',
    },
    spec: {
      templates: [{
        name: 'test',
        container: {
          name: 'test',
          image: 'test',
          command: ['test'],
          args: ['test'],
        },
      }],
    },
  });

  expect(Testing.synth(chart)).toMatchSnapshot();
});
