// Type Annotations With Objects

let personExOne: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
};

personExOne = {
  name: "Owais",
  age: 23,
  jobTitle: "Web Developer",
  address: {
    street: "Mehmoodabad",
    city: "Karachi",
  },
};

// Inline Method

let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Owais",
  age: 23,
  jobTitle: "Web Developer",
  address: {
    street: "Mehmoodabad",
    city: "Karachi",
  },
};
