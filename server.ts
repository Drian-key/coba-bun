Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.searchParams.get("name")) {
      const name = url.searchParams.get("name");
      return new Response(`Hello ${name}`);
    } else {
      return new Response(`Hello world!`);
    }
  },
});
