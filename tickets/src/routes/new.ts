import express, { Request, Response } from "express";

const router = express.Router();

router.post("/api/tickets", async (req: Request, res: Response) => {
  const { title, price } = req.body;

  // Validate title and price
  if (!title || title.length < 3) {
    return res
      .status(400)
      .send({ error: "Title must be at least 3 characters long" });
  }
  if (!price || isNaN(price) || price <= 0) {
    return res.status(400).send({ error: "Price must be a positive number" });
  }

  // Create a new ticket (this part would typically involve saving to a database)
  const ticket = { id: Date.now(), title, price };

  res.status(201).send(ticket);
});

export { router as createTicketRouter };
