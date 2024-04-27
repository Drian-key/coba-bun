const bcryptHash = await Bun.password.hash("myPassword", {
  algorithm: "bcrypt",
  cost: 10,
});

const result = await Bun.password.verify("myPassword", bcryptHash, "bcrypt");
console.info(result);
console.info(bcryptHash);
