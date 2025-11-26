export interface PostAPI {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
};

export interface Post {
  userId: number;
  userName: string;
  id:     number;
  title:  string;
  body:   string;
};

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}

