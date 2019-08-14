import { UTest } from '../UTest'
import { ActionVars } from './ActionVars';
import { RunnerDom } from './RunnerDom';

UTest.getSocket = function(callback){
	
	callback(ActionVars.socket);
};

UTest.getConfig = RunnerDom.getCurrentConfig;