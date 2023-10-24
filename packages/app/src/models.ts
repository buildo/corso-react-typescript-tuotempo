import { z } from "zod";

const TripBase = z.object({
  id: z.string(),
  origin: z.string(),
  destination: z.string(),
  // z.coerce.date() works almost the same, but it leads to unexpected behaviors like accepting `null` as a valid date
  // This is because `new Date(null)` returns a valid date object.
  // To avoid this, we first validate the input as a string with z.string(), then we check its format with .datetime(),
  // and finally we coerce it to a date with .pipe(z.coerce.date()).
  // .pipe(...) is a method to chain multiple validations.
  startDate: z.string().datetime().pipe(z.coerce.date()),
  endDate: z.string().datetime().pipe(z.coerce.date()),
});

const TripStatusBooked = z.object({
  status: z.literal("Booked"),
});

const TripStatusCheckedIn = z.object({
  status: z.literal("CheckedIn"),
  seatNumber: z.string(),
});

const TripStatusRequested = z.object({
  status: z.literal("Requested"),
});

// NOTE: z.union() would also work here, but z.discriminatedUnion() leads to a better decoding experience.
// With z.union() Zod will try all the schemas in the union until one of them succeeds. If all fail, it will then issue errors for all of them.
// With z.discriminatedUnion() Zod will first check the discriminator field, and then only try the schema that matches the value of the discriminator.
// This makes z.discriminatedUnion() more efficient, and it also leads to a better decoding experience because it will only issue errors for the schema that matches the discriminator.
const TripStatus = z.discriminatedUnion("status", [
  TripStatusBooked,
  TripStatusCheckedIn,
  TripStatusRequested,
]);

export const Trip = TripBase.and(TripStatus);

export type Trip = z.infer<typeof Trip>;
