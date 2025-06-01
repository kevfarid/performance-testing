export default interface User {
  id: {
    name: string;
    value: string;
  };
  email: string;
  gender: 'male' | 'female';
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}
