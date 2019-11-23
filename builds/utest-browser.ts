import { logger } from '../src/vars'

import '../src/assert/assert-browser'
import '../src/patch/jquery'

import { UTest } from '../src/UTest'

import '../src/browser/detect'
import '../src/browser/action'
import '../src/browser/utils/logger'

logger.cfg({
	formatMessage: false,
	transport: {
		type: 'console'
	}
});

export = UTest;