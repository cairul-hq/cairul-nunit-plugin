import { dotnetAdapter } from '@cairul/plugin-kit/runner';
import { trx } from '@cairul/plugin-kit/reports';

export default dotnetAdapter({ categories: 'TestCategory', parse: trx });
