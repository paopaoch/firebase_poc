export default function ({app, res, query, redirect}) {
	//console.log(app.context.route)
	if(app.context.route.name == 'admin') {
		const access_token = app.$cookiz.get('access_token')
		if(access_token == undefined) {
			redirect('/login')
		}
	}
    if(app.context.route.name == 'login') {
        const access_token = app.$cookiz.get('access_token')
		if(access_token != undefined) {
			redirect('/admin')
		}
    }
}