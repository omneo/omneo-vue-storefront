export type TODO = unknown;

export type Setttings = TODO;

export type Endpoints = TODO;

export type Profile = {
  first_name: string,
  last_name: string,
  email: string,
  identities: Array<{ [key: string]: string }>,
  attributes: {
    comms: { [key: string]: string },
    appearance: { [key: string]: string },
  },
  statuses: Array<{ [key: string]: string }>,
  tags: Array<{ [key: string]: string }>,
  joined_location: { [key: string]: string },
  preferred_location: { [key: string]: string }
};

export type Transaction = any
