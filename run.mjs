import { dotnetAdapter } from '@cairul/pdk/runner';
import { trx } from '@cairul/pdk/reports';

export default dotnetAdapter({ categories: 'TestCategory', parse: trx });
