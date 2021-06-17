import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

import { FightType, RegionType } from "./../enums";
import { Building, Faction, GDA, Player } from ".";

@ObjectType({ description: "A region in a GDA." })
export class Region {
	@Field(type => ID, { nullable: false, description: "The id of the region." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The description of the region." })
	@prop({ required: true, type: () => String })
	description!: string;

	@Field(type => FightType, { nullable: false, description: "The type of fights in the region." })
	@prop({ required: true, enum: FightType })
	fightType!: FightType;

	@Field(type => String, { nullable: false, description: "The link to the image of the region." })
	@prop({ required: true, type: () => String })
	image!: string;

	@Field(type => String, { nullable: true, description: "The link to the game file of the region." })
	@prop({ required: false, type: () => String })
	mapFileLink?: string;

	@Field(type => String, { nullable: false, description: "The name of the region." })
	@prop({ required: true, type: () => String })
	name!: string;

	@Field(type => RegionType, { nullable: false, description: "The type of the region." })
	@prop({ required: true, enum: RegionType })
	type!: RegionType;


	@Field(type => GDA, { nullable: false, description: "The GDA the region belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: true, description: "The faction owning the region." })
	@prop({ required: false, ref: () => Faction })
	owner?: Ref<Faction>;


	@Field(type => [Region], { nullable: false, description: "The regions adjacent to this region." })
	@prop({ required: true, ref: () => Region })
	adjacent!: Ref<Region>[];

	@Field(type => [Building], { nullable: false, description: "The buildings in the region." })
	@prop({ required: true, ref: () => Building })
	buildings!: Ref<Building>[];

	@Field(type => [Player], { nullable: false, description: "The players in the region." })
	@prop({ required: true, ref: () => Player })
	players!: Ref<Player>[];
}
