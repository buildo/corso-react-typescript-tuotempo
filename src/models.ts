import { z } from "zod";

export const Trip = z.object({
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

export type Trip = z.infer<typeof Trip>;
