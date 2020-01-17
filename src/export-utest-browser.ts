import { logger } from './vars'

import './assert/assert-browser'
import './patch/jquery'

import { UTest } from './UTest'

import './browser/detect'
import './browser/action'
import './browser/utils/logger'

logger.cfg({
	formatMessage: false,
	transport: {
		type: 'console'
	}
});

export = UTest;