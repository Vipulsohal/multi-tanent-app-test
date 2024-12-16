const http = require("http");
const fs = require("fs");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const jsYaml = require("js-yaml");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const OpenApiValidator = require("express-openapi-validator");
const config = require("./config");



class ExpressServer {
  constructor(port, openApiYaml) {
    this.port = port;
    this.app = express();
    this.openApiPath = openApiYaml;
    try {
      this.schema = jsYaml.safeLoad(fs.readFileSync(openApiYaml));
    } catch (e) {
      console.log(`failed to start Express Server:- ${e}`);
    }
    this.setupMiddleware();
  }

  setupMiddleware() {
    // this.setupAllowedMedia();
    this.app.use(cors({
      origin: 'http://localhost:3000', // Allow requests only from this origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    }));
    this.app.use(express.json({ limit: '14MB' }));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.get("/user/health", (req, res) => res.send(process.env.RELEASE_ID ? process.env.RELEASE_ID : `OK`));
    this.app.use("/user/api-docs", swaggerUI.serve, swaggerUI.setup(this.schema));
  }

  launch() {
    this.app.use(
      OpenApiValidator.middleware({
        apiSpec: this.openApiPath,
        operationHandlers: path.join(__dirname),
        fileUploader: false,
        validateRequests: true, // (default)
        validateResponses: false, // false by default
        validateSecurity: {
          handlers: {
            UserKeyAuth: () => { },
          },
        },
      })
    )
    this.app.use((err, req, res, next) => {
      // format errors
      res.status(err.status || 500).json({
        message: err.message || err,
        errors: err.errors || "",
      });
    });

    http.createServer(this.app).listen(this.port);
    console.log(`Listening on port ${this.port}`);
  }

  async close() {
    if (this.server !== undefined) {
      await this.server.close();
      console.log(`Server on port ${this.port} shut down`);
    }
  }
}
module.exports = ExpressServer;
