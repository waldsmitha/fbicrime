import { useEffect } from "react";

export function useAsync(asyncFn, onSuccess) {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((data) => {
      if (isActive) onSuccess(data);
    });
    return () => {
      isActive = false;
    };
  }, [asyncFn, onSuccess]);
}
