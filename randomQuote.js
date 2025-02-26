const APIKEY = "1Ybum9Vv+oS+EZUI4M2qHQ==TGvNOOHUZ3anW3D8";
const apiURL = "https://api.api-ninjas.com/v1/quotes";
let quote;

export async function randomQuote() {
  let fetchAPI = fetch(apiURL, {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": `${APIKEY}` },
    contentType: "application/json",
  });
  // fetchAPI
  //   .then((res) => res.json())
  //   .then((res) => {
  //     quote = res[0].quote;
  //   });
  return fetchAPI;
}
