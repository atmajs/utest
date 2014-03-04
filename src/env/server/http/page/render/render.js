
include
	.load('render.mask')
	.done(function(resp){
		
		include.exports = atma.server.HttpPage({
			
			master: '',
			template: '',
			scope: null,
			
			onRenderStart: function(model, ctx){
				var template,
					ctr;
				
				var repo = ctx.req.method === 'POST'
					? ctx.req.body
					: ctx.req.query
					;
					
				template = repo.template;
				model = repo.model;
				ctr = repo.controller;
				
				if (ctr && ctr.scope) 
					this.scope = ctr.scope;
				
				
				
				this.nodes = jmask(resp.load.render)
					.find('body')
					.prepend(template)
					.end();
				
				this.model = model;
			}
		});

	})