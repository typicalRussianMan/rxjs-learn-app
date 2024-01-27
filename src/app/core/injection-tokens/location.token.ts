import { InjectionToken } from '@angular/core';

/** Injection token to use instead of global location object. */
export const LOCATION = new InjectionToken<Location>(
  'An abstraction over global location object',
  {
    factory(): Location {
      return location;
    },
  },
);
