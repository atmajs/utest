import { include, atma, app, io } from '../vars';
import { class_Uri } from 'atma-utils';
import { Application, StaticContent } from 'atma-server';

declare var require;

let resume = include.pause();
let bodyParser = require('body-parser');
let Url = require('url');


Application
    .create({
        base: include.location,
        configs: class_Uri.combine(include.location, 'server/config/**.yml')
    })
    .then((app) => {

        app.responders([
            function(req, res, next){

                io.File.disableCache();
                StaticContent.Cache.state(false);

                var url = Url.parse(req.url, true);
                req.query = url.query;
                next();
            },
            bodyParser.json(),
            app.responder(null),
            StaticContent.respond
        ]);

        resume(app);
    });
