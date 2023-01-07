import { app } from "../../../../shared/infraestructure/http/app";
import request from "supertest";

describe('Create Category Controller', () => {
    it('test', async() => {
        await request(app).get('/categories').expect(200)
    })
})