import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip } from "./api";
import { AsyncButton } from "design-system/AsyncButton";

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

  return (
    <AsyncButton
      action={() => deleteTripMutation.mutateAsync(tripId)}
      variant="negative"
      labels={{
        error: "Delete Error ❌!",
        pending: "Deleting ⏳",
        success: "Deleted ✅",
        idle: "Delete",
      }}
    />
  );
}
