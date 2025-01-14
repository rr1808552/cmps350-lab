document.addEventListener("DOMContentLoaded", async () => {
  // const res = await fetch("http://localhost:3000/api/accounts", {
  //   method: "GET",
  //   // body: {},
  // });
  // const accounts = await res.json();

  const accounts = JSON.parse(
    `[{"balance":1000,"type":"current","id":"zGRzn_utaL9azBoRLKABv","createdat":"2023-03-30T10:48:48.758Z","transactions":[{"type":"w","amount":100,"id":"ASD","createdat":"2023..."}]},{"balance":1000,"type":"current","id":"gjHqmQJJ72aP90BBpvypf","createdat":"2023-03-30T10:49:04.109Z"},{"balance":1000,"type":"current","id":"Hw9onGDIbqhw6hVGCsWH3","createdat":"2023-03-30T10:49:05.398Z"},{"balance":1000,"type":"current","id":"LqDS-6qctw4pJEHwIywLH","createdat":"2023-03-30T10:49:05.996Z"},{"balance":1000,"type":"current","id":"cHhmHVTL8g9uvAKsF5nVR","createdat":"2023-03-30T10:49:06.625Z"},{"balance":1000,"type":"current","id":"Zw8o3XoMyOyCdwE6rDH9K","createdat":"2023-03-30T10:49:07.164Z"},{"balance":1000,"type":"current","id":"TI0gYZt81FX29AtBLKPZZ","createdat":"2023-03-30T10:49:07.652Z"},{"balance":1000,"type":"savings","id":"Oi7WsRXUTa6ixvbnun0W5","createdat":"2023-03-30T10:49:23.481Z"},{"balance":1000,"type":"savings","id":"Nkb5VReHjar3mqwtbe4Xh","createdat":"2023-03-30T10:49:24.194Z"},{"balance":1000,"type":"savings","id":"gd_w40MQEFMG253K83Q5h","createdat":"2023-03-30T10:49:24.817Z"},{"balance":1000,"type":"savings","id":"B_J9xULFtLXmiGK4AttWR","createdat":"2023-03-30T10:49:25.384Z"},{"balance":123,"type":"savings","id":"xq0DLoDBiU2uVZveydWhc","createdat":"2023-03-30T10:52:56.875Z"},{"balance":123,"type":"savings","id":"opxnDtjlAT8dZ2ZPHy5Lj","createdat":"2023-03-30T11:43:24.011Z"}]`
  );

  document.querySelector("#account").innerHTML = accounts
    .map((account) => `<option value="${account.id}">${account.id}</option>`)
    .join("");

  document
    .querySelector("#new-transaction")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = document.querySelector("#new-transaction");
      const data = new FormData(form);

      const res = await fetch("/api/accounts/${}/transactions", {
        method: "POST",
        body: {
          // type: ,
          // balance: ,
        },
      });
      const transaction = await res.json();
    });
});
