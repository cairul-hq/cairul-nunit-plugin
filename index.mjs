import { testRunner } from '@cairul/pdk/runner';
import adapter from './run.mjs';
import { trx, nunit, testPlugin } from '@cairul/pdk/reports';

const reports = testPlugin('nunit.passed', { trx, nunit });

export default testRunner(reports, 'nunit.run', adapter);
