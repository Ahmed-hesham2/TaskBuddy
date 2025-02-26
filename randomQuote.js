const APIKEY = "1Ybum9Vv+oS+EZUI4M2qHQ==TGvNOOHUZ3anW3D8";
const apiURL = "https://api.api-ninjas.com/v1/quotes";

export async function randomQuote() {
  let fetchAPI = fetch(apiURL, {
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": `${APIKEY}` },
    contentType: "application/json",
  });
  let quote;
  fetchAPI.then((res) => res.json()).then((res) => res[0].quote);
}
