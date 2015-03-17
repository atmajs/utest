
include
	.load('render.mask')
	.done(function(resp){
		
		include.exports = Class({
			Base: Class.Deferred,
			master: '',
			template: '',
			scope: null,
			
			process: function(req, res){
				var body = req.method === 'POST'
					? req.body
					: req.query
					;
				
				var template = body.template;
				var model = body.model || {};
				var ctr = body.controller || {};
				
				ctr.scripts = body.scripts || model.scripts;
				
				
				
				var nodes = mask.jmask(resp.load.render)
					.find('body')
					.prepend(template)
					.end();
				
				
				mask
					.renderAsync(nodes, model, null, null, ctr)
					.done(function(html){
						
						this.resolve(html, 200, 'text/html');
					}.bind(this));
				
			},
			
			__onRenderStart: function(model, ctx){
				var template,
					include,
					ctr
				
				var body = ctx.req.method === 'POST'
					? ctx.req.body
					: ctx.req.query
					;
				
				template = body.template;
				model = body.model || {};
				ctr = body.controller;
				include = body.include;

				this.scripts = body.scripts || model.scripts;
				
				this.hasMaskBootstrap = containsMaskBootstrap(include) || containsMaskBootstrap(this.scripts);

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
				
				this.nodes = jmask(resp.load.render)
					.find('body')
					.prepend(template)
					.end();
				
				this.model = model;
			}
		});

		function containsMaskBootstrap(arr) {
			if (arr == null)
				return;
			var imax = arr.length,
				i = -1,
				x;
			while(++i < imax){
				x = arr[i]
				if (x && x.indexOf('mask.bootstrap') !== -1)
					return true;
			}
			return false;
		}
	})