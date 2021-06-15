export const inputCondition = {
  required: (value: number) => {
    return value || typeof value === "number" ? undefined : "Required";
  },
  maxLength: (max: number) => (value: Array<string>) => {
    return value && value.length > max ? `Max is ${max}` : undefined;
  },
  minLength: (min: number) => (value: Array<string>) =>
    value && value.length < min ? `Min is ${min}` : undefined,
  number: (value: number) =>
    value && isNaN(Number(value)) ? "Must be a numb" : undefined,
  minValue: (min: number) => (value: number) =>
    value && value < min ? `Must be at least ${min}` : undefined,
  email: (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? "Invalid email"
      : undefined,
};