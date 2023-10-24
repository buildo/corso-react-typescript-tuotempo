import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "./api";
import { deleteTripStyle } from "./DeleteTripButton.css";
import { match } from "ts-pattern";
import { Button } from "design-system/Button";

interface DeleteTripButtonProps {
  tripId: string;
}

export function DeleteTripButton({ tripId }: DeleteTripButtonProps) {
  const queryClient = useQueryClient();
  const deleteTripMutation = useMutation({
    mutationKey: ["deleteTrip", tripId],
    mutationFn: deleteTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
    },
  });

  const label = match(deleteTripMutation.status)
    .with("error", () => "Delete Error ❌!")
    .with("pending", () => "Deleting ⏳")
    .with("success", () => "Deleted ✅")
    .with("idle", () => "Delete")
    .exhaustive();

  return (
    <Button
      onClick={() => deleteTripMutation.mutateAsync(tripId)}
      disabled={deleteTripMutation.isPending}
      className={deleteTripStyle}
    >
      {label}
    </Button>
  );
}
