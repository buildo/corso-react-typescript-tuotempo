import { useEffect, useState } from "react";
import { getTrips } from "./api";
import { Trip } from "./Trip";
import * as styles from "./Trips.css";

export function Trips() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <div className={styles.trips}>
      {trips.map((trip) => (
        <Trip key={trip.id} {...trip} />
      ))}
    </div>
  );
}
