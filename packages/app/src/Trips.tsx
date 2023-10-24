import { match } from "ts-pattern";
import { getTrips } from "./api";
import { Trip } from "./Trip";
import * as styles from "./Trips.css";
import { useQuery } from "@tanstack/react-query";

export function Trips() {
  const tripsQuery = useQuery({
    queryKey: ["trips"],
    queryFn: getTrips,
  });

  return (
    <div className={styles.trips}>
      {match(tripsQuery)
        .with({ status: "pending" }, () => <div>Loading...</div>)
        .with({ status: "error" }, () => (
          <div>Error while fetching trips!!</div>
        ))
        .with({ status: "success" }, ({ data: trips }) =>
          trips.map((trip) => <Trip key={trip.id} {...trip} />)
        )
        .exhaustive()}
    </div>
  );
}
