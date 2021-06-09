import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";
import { Alliance } from "./Alliance";
import { Building } from "./Building";
import { Faction } from "./Faction";
import { Fight } from "./Fight";
import { Player } from "./Player";
import { Region } from "./Region";
import { Turn } from "./Turn";

@ObjectType({ description: "A GDA." })
export class GDA {
	@Field(type => ID, { nullable: false, description: "The id of the GDA." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The name of the GDA." })
	@prop({ required: true, type: () => String })
	readonly name!: string;


	@Field(type => [Alliance], { nullable: false, description: "The alliances in the GDA." })
	@prop({ required: true, type: () => Alliance })
	readonly alliances!: Ref<Alliance>[];

	@Field(type => [Building], { nullable: false, description: "The buildings in the GDA." })
	@prop({ required: true, type: () => Building })
	readonly buildings!: Ref<Building>[];

	@Field(type => [Event], { nullable: false, description: "The events in the GDA." })
	@prop({ required: true, type: () => Event })
	readonly events!: Ref<Event>[];

	@Field(type => [Faction], { nullable: false, description: "The factions in the GDA." })
	@prop({ required: true, type: () => Faction })
	readonly factions!: Ref<Faction>[];

	@Field(type => [Fight], { nullable: false, description: "The fights in the GDA." })
	@prop({ required: true, type: () => Fight })
	readonly fights!: Ref<Fight>[];

	@Field(type => [Player], { nullable: false, description: "The players in the GDA." })
	@prop({ required: true, type: () => Player })
	readonly players!: Ref<Player>[];

	@Field(type => [Region], { nullable: false, description: "The regions in the GDA." })
	@prop({ required: true, type: () => Region })
	readonly regions!: Ref<Region>[];

	@Field(type => [Turn], { nullable: false, description: "The turns in the GDA." })
	@prop({ required: true, type: () => Turn })
	readonly turns!: Ref<Turn>[];
}

export const GDAModel = getModelForClass(GDA);
