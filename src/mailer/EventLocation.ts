interface EventLocation {
  name: string,
  address?: string,
  geo?: {
    latitude: number,
    longitude: number,
  },
}

export {
  type EventLocation,
}
