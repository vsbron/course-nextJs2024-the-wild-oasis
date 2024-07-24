import Counter from "../components/Counter";

async function Page() {
  // Fetching data straight from the server component
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data); // Logging on server

  return (
    <>
      <h1>Cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={data} />
    </>
  );
}

export default Page;
