import { UTest } from '../UTest'
import { NodeVars } from './node-vars';
import { io_connect } from './utils/io';
import { logger } from '../vars';
import { color } from '../utils/str';

UTest.getSocket = function(callback){

    var cfg = NodeVars.suite.cfgNode || NodeVars.suite.cfgBrowser;

    io_connect(cfg)
        .done(function(socket){

            callback(socket, cfg);
        })
        .fail(function(error){

            logger
                .error('<Exit> server connection is not established.', error)
                .log(color`bold<Executed 'atma server'?>`)
                ;
        });
};

UTest.getConfig = function () {
    return NodeVars.configs;
};
