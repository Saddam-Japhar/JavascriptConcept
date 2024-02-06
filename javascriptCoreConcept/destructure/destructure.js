// const result = {
//     "keys": [
//       {
//         "kty": "RSA",
//         "use": "sig",
//         "n": "D36leDNwDK4Dw",
//         "e": "AQAB",
//         "kid": "cjnQQl",
//         "x5t": "1NSm31oZofZU",
//         "x5c": [
//           "MIIDJzCCMDExLzAtBgNVBAMTJmN19tMB4XDTIzMDkwNzE1NqHJgSA=="
//         ],
//         "alg": "RS256"
//       },
//       {
//         "kty": "RSA",
//         "use": "sig",
//         "n": "rkZ0",
//         "e": "AQAB",
//         "kid": "psa1k",
//         "x5t": "METy",
//         "x5c": [
//           "MIIDJ3VzdG9tZXItc2FuZGJveC5tUAA4IB"
//         ],
//         "alg": "RS256"
//       }
//     ]
//   }


const response = {
  keys: [
    {
      kty: "RSA",
      use: "sig",
      n: "D36leDNwDK4Dw",
      e: "AQAB",
      kid: "cjnQQl",
      x5t: "1NSm31oZofZU",
      x5c: [
        "MIIDJzCCMDExLzAtBgNVBAMTJmN19tMB4XDTIzMDkwNzE1NqHJgSA==",
        "fadsfasdfasdfgasdfa"
      ],
      alg: "RS256"
    },
    {
      kty: "RSA",
      use: "sig",
      n: "rkZ0",
      e: "AQAB",
      kid: "psa1k",
      x5t: "METy",
      x5c: [
        "MIIDJ3VzdG9tZXItc2FuZGJveC5tUAA4IB"
      ],
      alg: "RS256"
    }
  ]
};
//const { keys: [{ x5c: [publicKey] }] } = response;
// console.log(publicKey);
// const publicKey = response.keys[0].x5c[0];
  const {keys:[{x5c:[x5c]}]} = response;

  console.log("printing keys", x5c);
