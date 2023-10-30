import { getTrips } from "./api";
import { Trip } from "./Trip";
import * as styles from "./Trips.css";
import { useQuery } from "@tanstack/react-query";

export function Trips() {
  const {
    data: trips,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["trips"], queryFn: getTrips });

  return (
    <div className={styles.trips}>
      {isError && <div>Error while fetching trips!!</div>}
      {isLoading && <div>Loading...</div>}
      {trips?.map((trip) => (
        <Trip key={trip.id} {...trip} />
      ))}
    </div>
  );
}
