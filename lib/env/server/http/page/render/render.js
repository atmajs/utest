
include
	.load('render.mask')
	.done(function(resp){
		
		include.exports = atma.server.HttpPage({
			
			master: '',
			template: '',
			scope: null,
			
			onRenderStart: function(model, ctx){
				var template,
					include,
					ctr
				
				var repo = ctx.req.method === 'POST'
					? ctx.req.body
					: ctx.req.query
					;
					
				template = repo.template;
				model = repo.model;
				ctr = repo.controller;
				include = repo.include;
				
				if (ctr && ctr.scope) 
					this.scope = ctr.scope;
				
				if (include) {
					if (Array.isArray(include) === false) 
						include = [ include ];
					
					this.include = include
						.map(function(path){
							return '"' + path + '"'
						})
						.join(',');
				}
				
				logger.log('>>>'.yellow.bold, this.include, include);
				
				this.nodes = jmask(resp.load.render)
					.find('body')
					.prepend(template)
					.end();
				
				this.model = model;
			}
		});

	})