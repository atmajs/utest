import { logger } from '../src/vars'

import '../src/assert/assert-browser'
import '../src/patch/jquery'
import '../src/UTest'
import '../src/browser/detect'
import '../src/browser/action'

logger.cfg({
	formatMessage: false,
	transport: {
		type: 'console'
	}
});
