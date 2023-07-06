interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// If we update the MyUser, we would have to update it manually. Better use Partial
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

// Required makes all the variables required
type RequiredMyUser = Required<MyUser>;

// Pick takes a type and a list of keys and we pick out from the list of keys
type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutId = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};
