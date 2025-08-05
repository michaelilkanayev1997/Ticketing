import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@michaelil/common";

const router = express.Router();

router.post(
  "/api/orders",
  requireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("Ticket ID must be provided"),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
