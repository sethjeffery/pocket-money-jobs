const interpolateModel = (input: string, model: Record<string, unknown>) =>
  input.replace(/\:(\w+)/g, (_, key) =>
    key in model ? String(model[key]) : ''
  )

export default interpolateModel
