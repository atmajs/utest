
include
	.load('render.mask')
	.done(function(resp){
		
		include.exports = atma.server.HttpPage({
			
			master: '',
			
			onRenderStart: function(model, ctx){
				var template;
									
				if (ctx.req.query) 
					template = ctx.req.query.template;
				
				if (ctx.req.method === 'POST') {
					template = ctx.req.body.template;
					model = ctx.req.body.template;
				}
				
				
				this.nodes = jmask(resp.load.render)
					.find('body')
					.append(template)
					.end();
				
				
				this.model = model;
			}
		});

	})