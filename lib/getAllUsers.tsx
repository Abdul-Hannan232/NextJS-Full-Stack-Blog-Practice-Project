async function getAllUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  //   const users = await data.json();

  if (!data.ok) throw new Error("Data not found!");

  return data.json();
}

export default getAllUsers;
