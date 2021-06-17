// import * as Inputs from "./inputs";
// import * as Mutations from "./mutations";
import * as Queries from "./queries";

// export * as Inputs from "./inputs";
// export * as Mutations from "./mutations";
export * as Queries from "./queries";

export const allResolvers = [
	// Inputs.AllianceInput,
	// Mutations.AllianceMutation,
	Queries.AllianceResolver,
	Queries.BuildingResolver,
	Queries.DiscordUserResolver,
	Queries.EventResolver,
	Queries.FactionResolver,
	Queries.FightResolver,
	Queries.GDAResolver,
	Queries.PlayerResolver,
	Queries.RegionResolver,
	Queries.TurnResolver,
] as const;
