interface Args {
  positional: string[],
  optional: Record<string, boolean | string>,
}

export {
  type Args,
}
