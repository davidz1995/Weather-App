const request = require('supertest')
const app = require('../index')

describe('GET /location', () => {
    it('Get /location, responde con un objeto JSON', done => {
        request(app)
        .get('/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
    it('Get /location, responde con un status 404 si se envían datos por params',done => {
        request(app)
        .get('/v1/current/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404, done)
    })
})

describe('GET /current', () => {
    it('Get /current, responde con un objeto JSON', done => {
        request(app)
        .get('/v1/current')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })
    it('Get /current:city, responde con un objeto JSON si existe la ciudad.',done => {
        request(app)
        .get('/v1/current/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
    it('Get /current:city, responde con un status 404 si no existe la ciudad.',done => {
        request(app)
        .get('/v1/current/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404, done)
    })
    it(`Get /current:city, responde "Ciudad no encontrada", si no existe la ciudad.`,done => {
        request(app)
        .get('/v1/current/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404)
        .expect({"message":"Ciudad no encontrada"})
        .end(error => {
            if (error) done(error) 
            done()
        })
    })
})

describe('GET /forecast', () => {
    it('Get /forecast, responde con un objeto JSON', done => {
        request(app)
        .get('/v1/forecast')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })
    it('Get /forecast:city, responde con un objeto JSON si existe la ciudad.',done => {
        request(app)
        .get('/v1/forecast/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
    it('Get /forecast:city, responde con un status 404 si no existe la ciudad.',done => {
        request(app)
        .get('/v1/forecast/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404, done)
    })
    it(`Get /forecast:city, responde "Ciudad no encontrada", si no existe la ciudad.`,done => {
        request(app)
        .get('/v1/forecast/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404)
        .expect({"message":"Ciudad no encontrada"})
        .end(done)
    })
})
