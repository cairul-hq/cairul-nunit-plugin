import { testRunner } from '@cairul/plugin-kit/runner';
import adapter from './run.mjs';
import { trx, nunit, testPlugin } from '@cairul/plugin-kit/reports';

const reports = testPlugin('nunit.passed', { trx, nunit });

export default testRunner(reports, 'nunit.run', adapter);
