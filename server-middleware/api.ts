import "reflect-metadata";

import express, { Express, Request } from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { json } from "body-parser";
import { registerEnumType, buildSchema } from "type-graphql";
import helmet from "helmet";
import cors from "cors";

import { AllianceType, BuildingType, EventType, FightType, HandicapLevel, MercenaryLevel, RegionType } from "../assets/entities";
import { AllianceResolver } from "./resolvers/queries/AllianceResolver";
import { BuildingResolver } from "./resolvers/queries/BuildingResolver";

let app: Express = express();
let db: mongoose.Mongoose;

Promise
.resolve()
.then(() => mongoose.connect(process.env.DATABASE_URI!, {
	autoCreate: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
}))
.then((_db) => void (db = _db))
.then(() => void (app = express()))
.then(() => void app.use(cors<Request>()))
.then(() => void app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false })))
.then(() => void app.use(json()))
.then(() => [
	{
		enu: AllianceType,
		name: "AllianceType",
		description: "The type of alliance.",
	},
	{
		enu: BuildingType,
		name: "BuildingType",
		description: "The type of building.",
	},
	{
		enu: EventType,
		name: "BuildingType",
		description: "The type of event.",
	},
	{
		enu: FightType,
		name: "FightType",
		description: "The type of fight.",
	},
	{
		enu: HandicapLevel,
		name: "HandicapLevel",
		description: "The level of handicap.",
	},
	{
		enu: MercenaryLevel,
		name: "MercenaryLevel",
		description: "The level of mercenary.",
	},
	{
		enu: RegionType,
		name: "RegionType",
		description: "The type of region.",
	},
].forEach(({enu, name, description}) => registerEnumType(enu, {name, description})))
.then(() => buildSchema({ resolvers: [
	AllianceResolver,
	BuildingResolver,
] }))
.then((schema) => void app.use("", graphqlHTTP({
	schema,
	rootValue: {
		hello: () => {
			return 'Hello world!';
		},
	},
	graphiql: true,
})))
.then(() => {
});

export default {
	path: "/api",
	handler: app,
}
