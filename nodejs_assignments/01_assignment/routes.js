const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body><ul>");
    res.write("<li>John</li>");
    res.write("<li>Paul</li>");
    res.write("<li>Ringo</li>");
    res.write("<li>George</li>");
    res.write("</ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split("=")[1];
      console.log(newUser);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<head><title>Greetings</title></head>");
    res.write("<body>");
    res.write("<h1>Greetings human!</h1>");
    res.write('<form action="/create-user" method="POST">');
    res.write(
      '<input type="text" name="username"><button type="submit">Submit</button>'
    );
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>not found</title></head>");
  res.write("<body>");
  res.write("<h1>This page does not exist!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
