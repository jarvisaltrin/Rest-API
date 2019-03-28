// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const controllers = require('../controllers')

// Get all players at http://localhost:3000/api/players
// Get all teams at http://localhost:3000/api/teams
// GET
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null){
		res.json({
			confirmation: 'failure',
			message: 'Invalid Resource'
		})
		return
	}
	controller.get(filters)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failure',
			message: err.message
		})	
	})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'failure',
			message: 'Invalid Resource'
		})
		return
	}
	controller.getById(id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failure',
			message: err.message
		})	
	})
})


// POST - create new entities/records
router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'failure',
			message: 'Invalid POST Resource'
		})
		return
	}
	controller.post(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failure',
			message: err.message
		})
	})
})


// PUT : update entities
router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'failure',
			message: 'Invalid PUT Resource'
		})
		return
	}
	controller.put(req.params.id, req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failure',
			message: err.message
		})
	})

})

// DELETE
router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'failure',
			message: 'Invalid PUT Resource'
		})
		return
	}
	controller.delete(req.params.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'failure',
			message: err.message
		})
	})	
})

module.exports = router
