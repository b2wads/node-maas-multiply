const request = require('supertest')

const app = require('../../../app')

describe('[ Acceptance ] Multiply operation routes', () => {
    
  describe('POST /api/v1/operations/multiply', () => {
    
    let left = 2
    let right = 3
    
    let res

    before(async () => {
      res = await request(app)
        .post('/api/v1/operations/multiply')
        .send({ left, right })
    })

    it('should return 200', () => {
        expect(res.status).to.be.eql(200)
    })

    it('should return multiply', () => {
      expect(res.body).to.be.eql({ result: 6 });
    })
  })
})
