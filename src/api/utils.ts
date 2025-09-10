export const getQueryParams = (
  params: Record<string, string | undefined>
): string => {
  const paramsObj = Object.entries(params).reduce(
    (acc, [key, value]) => {
      if (value) acc[key] = value;

      return acc;
    },
    {} as Record<string, string>
  );

  return new URLSearchParams(paramsObj).toString();
};
