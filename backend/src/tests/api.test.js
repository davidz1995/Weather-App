const { application } = require('express')
const request = require('supertest')
const app = require('../index')

//testing get current

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
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done)
    })
    it(`Get /current:city, responde "Ciudad no encontrada", si no existe la ciudad.`,done => {
        request(app)
        .get('/v1/current/abcde')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404)
        .expect('Ciudad no encontrada')
        .end(error => {
            if (error) done(error) 
            done()
        })
    })
})