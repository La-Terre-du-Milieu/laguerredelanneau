import  { AllianceType } from "./AllianceType";
import  { BuildingType } from "./BuildingType";
import  { EventType } from "./EventType";
import  { FightType } from "./FightType";
import  { HandicapLevel } from "./HandicapLevel";
import  { MercenaryLevel } from "./MercenaryLevel";
import  { RegionType } from "./RegionType";

export { AllianceType } from "./AllianceType";
export { BuildingType } from "./BuildingType";
export { EventType } from "./EventType";
export { FightType } from "./FightType";
export { HandicapLevel } from "./HandicapLevel";
export { MercenaryLevel } from "./MercenaryLevel";
export { RegionType } from "./RegionType";

export const registeredEnums = [
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
		name: "EventType",
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
];
