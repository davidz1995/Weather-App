const request = require('supertest')
const app = require('../index')
const should = require('should');

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
    it(`Get /location, responde con un objeto JSON, que tiene un status igual a 'success'`, done => {
        request(app)
        .get('/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.status.should.deepEqual('success')
            done();
        })
        .catch(err => done(err))
    })
    it(`Responde con un objeto JSON, que tiene una propiedad 'country' con el nombre de la ciudad actual `, done => {
        request(app)
        .get('/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('country').which.is.a.String()
            done();
        })
        .catch(err => done(err))
    })
    it(`Responde con un objeto JSON, que tiene una propiedad 'countryCode' con el codigo de ciudad de 2 letras`, done => {
        request(app)
        .get('/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('countryCode').with.lengthOf(2);
            done();
        })
        .catch(err => done(err))
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
    it('Get /current, responde data de ciudad actual y tambien informacion de clima',done => {
        request(app)
        .get('/v1/current')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('locationData').which.is.a.Object() && response.body.should.have.property('currentCityWeather').which.is.a.Object()
            done();
        })
        .catch(err => done(err))
    })
    it('Get /current, responde un JSON con clima de ciudad actual.',done => {
        request(app)
        .get('/v1/current')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.currentCityWeather.main.should.have.property('temp').which.is.a.Number() 
            done();
        })
        .catch(err => done(err))
    })
    it('Get /current:city, responde con un objeto JSON si existe la ciudad.',done => {
        request(app)
        .get('/v1/current/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
    it('Get /current:city, responde un JSON con clima de ciudad buscada.',done => {
        request(app)
        .get('/v1/current/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.main.should.have.property('temp').which.is.a.Number() 
            done();
        })
        .catch(err => done(err))
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
    it('Get /forecast, responde data de ciudad actual y tambien informacion de clima',done => {
        request(app)
        .get('/v1/forecast')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('locationData').which.is.a.Object() && response.body.should.have.property('currentCityWeatherFiveDaysForecast').which.is.a.Object()
            done();
        })
        .catch(err => done(err))
    })
    it('Get /forecast, responde un JSON con pronostico de ciudad actual.',done => {
        request(app)
        .get('/v1/forecast')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.currentCityWeatherFiveDaysForecast.should.have.property('list').with.lengthOf(40);
            done();
        })
        .catch(err => done(err))
    })
    it('Get /forecast:city, responde con un objeto JSON si existe la ciudad.',done => {
        request(app)
        .get('/v1/forecast/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
    it('Get /forecast:city, responde un JSON con pronostico de ciudad buscada.',done => {
        request(app)
        .get('/v1/forecast/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('list').with.lengthOf(40);
            done();
        })
        .catch(err => done(err))
    })
    it('Get /forecast:city, responde un JSON con informacion de ciudad buscada.',done => {
        request(app)
        .get('/v1/forecast/london')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(response => {
            response.body.should.have.property('city').which.is.a.Object()
            done();
        })
        .catch(err => done(err))
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
