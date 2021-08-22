// formToObject
export const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  )

// getFormData?
export const getFormData = (form) => {
  return new FormData(form)
}
