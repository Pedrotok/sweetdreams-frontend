const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function authenticate(email, password) {
  let response = await fetch(`${url}/user/authenticate`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    }
  );

  if (response.ok) {
    let json = await response.json();
    return json.content;
  } else {
    return "Error";
  }
}