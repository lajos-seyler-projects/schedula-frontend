interface Timezone {
  value: string;
  offset: string;
}

interface TimezoneMap {
  [region: string]: Timezone[];
}
