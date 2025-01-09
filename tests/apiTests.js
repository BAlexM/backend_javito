/*const request = require('supertest');
const app = require('../app');

//Ezt a részt úgy írtam hogy sajnos éppen az egész kód nem működött ezért ezt a 
//kódot egyszer sem tudtam lefuttatni így a copilot segítségét kértem így valószínüleg nem is jó

describe('Wish API', () => {
  it('should fetch all wishes', async () => {
    const res = await request(app).get('/api/wishes');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should create a new wish', async () => {
    const res = await request(app)
      .post('/api/wishes')
      .send({ content: 'Happy New Year!' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
*/