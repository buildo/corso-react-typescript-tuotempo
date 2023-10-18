import { getTrips } from "./api";
import { Trip } from "./Trip";
import * as styles from "./Trips.css";
import { useQuery } from "@tanstack/react-query";

export function Trips() {
  const { data: trips, status } = useQuery({
    queryKey: ["trips"],
    queryFn: getTrips,
  });

  const renderTrips = (): React.ReactNode => {
    switch (status) {
      case "pending":
        return <div>Loading...</div>;
      case "error":
        return <div>Error while fetching trips!!</div>;
      case "success":
        return trips?.map((trip) => <Trip key={trip.id} {...trip} />);
    }
  };

  return <div className={styles.trips}>{renderTrips()}</div>;
}
