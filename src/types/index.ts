interface Timezone {
  value: string;
  offset: string;
}

export interface TimezoneMap {
  [region: string]: Timezone[];
}
