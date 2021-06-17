import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

import { Alliance, Building, Event, Faction, Fight, Player, Region, Turn } from ".";

@ObjectType({ description: "A GDA." })
export class GDA {
	@Field(type => ID, { nullable: false, description: "The id of the GDA." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The name of the GDA." })
	@prop({ required: true, type: () => String })
	name!: string;


	@Field(type => [Alliance], { nullable: false, description: "The alliances in the GDA." })
	@prop({ required: true, ref: () => Alliance })
	alliances!: Ref<Alliance>[];

	@Field(type => [Building], { nullable: false, description: "The buildings in the GDA." })
	@prop({ required: true, ref: () => Building })
	buildings!: Ref<Building>[];

	@Field(type => [Event], { nullable: false, description: "The events in the GDA." })
	@prop({ required: true, ref: () => Event })
	events!: Ref<Event>[];

	@Field(type => [Faction], { nullable: false, description: "The factions in the GDA." })
	@prop({ required: true, ref: () => Faction })
	factions!: Ref<Faction>[];

	@Field(type => [Fight], { nullable: false, description: "The fights in the GDA." })
	@prop({ required: true, ref: () => Fight })
	fights!: Ref<Fight>[];

	@Field(type => [Player], { nullable: false, description: "The players in the GDA." })
	@prop({ required: true, ref: () => Player })
	players!: Ref<Player>[];

	@Field(type => [Region], { nullable: false, description: "The regions in the GDA." })
	@prop({ required: true, ref: () => Region })
	regions!: Ref<Region>[];

	@Field(type => [Turn], { nullable: false, description: "The turns in the GDA." })
	@prop({ required: true, ref: () => Turn })
	turns!: Ref<Turn>[];
}
