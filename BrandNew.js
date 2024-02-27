async function fetchdetails()
{
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    console.log(result);
   //  const res = await result.data.json();
   //  console.log(res);
}

fetchdetails();