export const callApi = task => {
    console.log(task);
    return fetch(`http://localhost:8000/api/task`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };