import { NonEmptyArray } from "type-graphql";
import * as queryResolvers from "./queries";

export default queryResolvers;

export function getResolvers(): NonEmptyArray<Function> {
	return [
		queryResolvers.AllianceResolver,
		queryResolvers.BuildingResolver,
	]
}
