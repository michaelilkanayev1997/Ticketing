import request from "supertest";

import { app } from "../../app";

it("can fetch a list of tickets", async () => {
  const title1 = "Ticket 1";
  const price1 = 100;

  const title2 = "Ticket 2";
  const price2 = 200;

  // Create two tickets
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: title1, price: price1 })
    .expect(201);

  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: title2, price: price2 })
    .expect(201);

  // Fetch the list of tickets
  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(2);
  expect(response.body[0].title).toEqual(title1);
  expect(response.body[0].price).toEqual(price1);
  expect(response.body[1].title).toEqual(title2);
  expect(response.body[1].price).toEqual(price2);
});
