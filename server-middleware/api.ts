import proxy, { ProxyOptions } from "express-http-proxy";
import express, { Express, Request, Response, NextFunction } from "express";

import { json } from "body-parser";
import helmet from "helmet";
import cors from "cors";

const app = express();
app.use(cors<Request>());
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === "production") ? undefined : false }));
app.use(json());
app.use("/", proxy(`${process.env.API_HOST!}:${process.env.API_PORT!}`));

export default app;
