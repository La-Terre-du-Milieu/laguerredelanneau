import { config } from "dotenv";
config({ path: "./.env" });

import express, { Express } from "express";

import { graphqlHTTP } from "express-graphql";
import { registerEnumType, buildSchema, NonEmptyArray } from "type-graphql";

import mongoose from "mongoose";

import { allResolvers } from "./resolvers";
import { Entities } from "./../../assets";

import "reflect-metadata";

let app: Express;
let db: mongoose.Mongoose;

Promise
.resolve()
.then(() => mongoose.connect(`${process.env.DATABASE_SCHEME!}://${process.env.DATABASE_HOST!}:${process.env.DATABASE_PORT!}${process.env.DATABASE_URI!}`, {
	autoCreate: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
}))
.then((_db) => void (db = _db))
.then(() => console.log("Connected to the DB"))
.then(() => void (app = express()))
.then(() => Entities.Enums.registeredEnums.forEach(({enu, name, description}) => registerEnumType(enu, {name, description})))
.then(() => buildSchema({ resolvers: allResolvers as NonEmptyArray<Function> }))
.then((schema) => void app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: (process.env.NODE_ENV !== "production"),
		pretty: true,
	})
))
.then(() => app.listen(parseInt(process.env.API_PORT!), process.env.API_HOST!))
.then(() => console.log("API server running"));
