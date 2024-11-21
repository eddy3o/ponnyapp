/* eslint-disable @typescript-eslint/no-explicit-any */
export function parseClassNames(...classes: (string | any)[]) {
  return classes
    .flat(5)
    .filter((c) => typeof c === "string" && c.length > 0)
    .join(" ");
}

export function parseFormData(data: any) {
  return Object.fromEntries(data.entries());
}
