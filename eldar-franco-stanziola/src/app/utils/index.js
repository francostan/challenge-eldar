export const countryCodes = [
  { value: "+54", label: "+54 (Argentina)" },
  { value: "+55", label: "+55 (Brasil)" },
  { value: "+56", label: "+56 (Chile)" },
  { value: "+57", label: "+57 (Colombia)" },
  { value: "+58", label: "+58 (Venezuela)" },
  { value: "+51", label: "+51 (Perú)" },
  { value: "+52", label: "+52 (México)" },
  { value: "+53", label: "+53 (Cuba)" },
  { value: "+593", label: "+593 (Ecuador)" },
  { value: "+592", label: "+592 (Guyana)" },
  { value: "+595", label: "+595 (Paraguay)" },
  { value: "+598", label: "+598 (Uruguay)" },
  { value: "+591", label: "+591 (Bolivia)" },
  { value: "+507", label: "+507 (Panamá)" },
  { value: "+504", label: "+504 (Honduras)" },
  { value: "+502", label: "+502 (Guatemala)" },
  { value: "+503", label: "+503 (El Salvador)" },
  { value: "+504", label: "+504 (Nicaragua)" },
  { value: "+506", label: "+506 (Costa Rica)" },
  { value: "+509", label: "+509 (Haití)" },
];

export const getUsersJSONPlaceHolder = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const users = data.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersFromFakeDB = async () => {
  try {
    const response = await fetch("/api/user/getAll");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const generatePages = (objects, elements) => {
  const elementsPerPage = elements || 5;

  if (objects.length > 0) {
    return objects.length % elementsPerPage === 0
      ? parseInt(objects.length / elementsPerPage)
      : parseInt(objects.length / elementsPerPage) + 1;
  } else return 0;
};

export const filterAndGetByValue = (valueFromSearch, arrayItems) => {
  let filteredItems = [];
  if (arrayItems.length > 0) {
    filteredItems = arrayItems.filter((item) => {
      const compareItem = item.name || item.firstName + " " + item.lastName;
      return compareItem.toLowerCase().includes(valueFromSearch.toLowerCase());
    });
  }
  return filteredItems;
};

export const isAdmin = async (id) => {
  try {
    const response = await fetch(`/api/user/isAdmin?id=${id}`);
    const isAdmin = await response.json();
    return isAdmin;
  } catch (error) {
    console.error(error);
  }
};

export const findOneById = async (id) => {
  try {
    const response = await fetch(`/api/user/findById?id=${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
}

export const updateOne = async (user) => {
  try {
    const response = await fetch("/api/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error(error);
  }
}

export const deleteOne = async (id) => {
  try {
    const response = await fetch("/api/user/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const deletedUser = await response.json();
    return deletedUser;
  } catch (error) {
    console.error(error);
  }
}

export const addOne = async (user) => {
  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const addedUser = await response.json();
    return addedUser;
  } catch (error) {
    console.error(error);
  }
}