import { match } from "ts-pattern";
import * as styles from "./Trip.css";
import * as models from "./models";
import { DeleteTripButton } from "./DeleteTripButton";

type Props = models.Trip;

export function Trip(props: Props) {
  const seatNumber = match(props)
    .with({ status: "Booked" }, { status: "Requested" }, () => "")
    .with({ status: "CheckedIn" }, ({ seatNumber }) => `⋅ 💺 ${seatNumber}`)
    .exhaustive();

  return (
    <div className={`${styles.trip} ${styles.tripStatus[props.status]}`}>
      <span>{`${props.origin} -> ${props.destination} ${seatNumber}`}</span>
      <span>{`${props.startDate.toLocaleDateString()} -> ${props.endDate.toLocaleDateString()}`}</span>
      <DeleteTripButton tripId={props.id} />
    </div>
  );
}
