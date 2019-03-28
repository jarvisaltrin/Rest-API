// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const players = [
	{firstName:"Eli", lastName:"Manning", position:"Defense", age: 30, team:"BAR"},
	{firstName:"Tom", lastName:"Brown", position:"Midfield", age: 28, team:"CRT"},
	{firstName:"Rob", lastName:"Holding", position:"Attack", age: 25, team:"ZIM"}
]
const teams = [
	{name:"BAR", country:"Brazil", conference: "League"},
	{name:"CRT", country:"Croatia", conference: "National"},
	{name:"ZIM", country:"Zimbabwe", conference: "League"}
]

const db = {
	teams: teams,
	players: players
}


// Get all players at http://localhost:3000/api/players
// Get all teams at http://localhost:3000/api/teams
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const data = db[resource]
	if(data == null){
		res.json({
		confirmation: 'failure',
		message: 'Invalid request. Resource undefined.'
	})
		return
	}
	res.json({
		confirmation: 'success',
		data: data
	})

	// if(resource == 'teams'){
	// 	res.json({
	// 	confirmation: 'success',
	// 	data: teams
	// })
	// 	return
	// }
	// if(resource == 'players'){
	// 	res.json({
	// 	confirmation: 'success',
	// 	data: teams
	// })
	// 	return
	// }
	
})


/*  This is a sample API route. */
/*
router.get('/:resource', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})
*/


module.exports = router
