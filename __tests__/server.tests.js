'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server); // mock the server for us

describe('***API SERVER:***', () => {
	it('should respond with a 404 on bad route', async () => {
		return mockRequest.get('/where').then((data) => {
			expect(data.status).toBe(404);
		});
	});

	it('should respond with a 404 on bad method', async () => {
		return mockRequest.post('/').then((data) => {
			expect(data.status).toBe(404);
		});
	});
	it('should create new food in the db', async () => {
		const response = await mockRequest.post('/food').send({ description: 'test_food' });
		expect(response.status).toBe(201);
		expect(response.body.record.description).toEqual('test_food');
	});

	it('get one record', async () => {
		const response = await mockRequest.get('/food/1');
		expect(response.status).toBe(200);
		expect(response.body.record.description).toEqual('test_food');
	});

	it('get all records', async () => {
		const response = await mockRequest.get('/food');
		expect(response.status).toBe(200);
		expect(response.body).toEqual([{ id: 1, record: { description: 'test_food' } }]);
		console.log(response.body);
	});
	it('update a record', async () => {
		const response = await mockRequest.put('/food/1').send({ description: 'test_food_update' });
		expect(response.status).toBe(200);
		expect(response.body.record.description).toEqual('test_food_update');
	});

	it('delete a record', async () => {
		const response = await mockRequest.delete('/food/1');
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ msg: 'deleted!' });
	});
    /////////////////////
    it('should create new clothes in the db', async () => {
		const response = await mockRequest.post('/clothes').send({ description: 'test_clothes' });
		expect(response.status).toBe(201);
		expect(response.body.record.description).toEqual('test_clothes');
	});

	it('get one record', async () => {
		const response = await mockRequest.get('/clothes/1');
		expect(response.status).toBe(200);
		expect(response.body.record.description).toEqual('test_clothes');
	});

	it('get all records', async () => {
		const response = await mockRequest.get('/clothes');
		expect(response.status).toBe(200);
		expect(response.body).toEqual([{ id: 1, record: { description: 'test_clothes' } }]);
		console.log(response.body);
	});
	it('update a record', async () => {
		const response = await mockRequest.put('/clothes/1').send({ description: 'test_clothes_update' });
		expect(response.status).toBe(200);
		expect(response.body.record.description).toEqual('test_clothes_update');
	});

	it('delete a record', async () => {
		const response = await mockRequest.delete('/clothes/1');
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ msg: 'deleted!' });
	});
});
