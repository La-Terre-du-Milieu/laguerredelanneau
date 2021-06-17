import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, Int, ObjectType } from "type-graphql";

import { Alliance, GDA, Player, Region } from ".";

@ObjectType({ description: "A faction in the GDA." })
export class Faction {
	@Field(type => ID, { nullable: false, description: "The id of the faction." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The color of the faction." })
	@prop({ required: true, type: () => String })
	color!: string;

	@Field(type => Int, { nullable: true, description: "The timestamp the faction died at." })
	@prop({ required: false, type: () => Number })
	death?: number;

	@Field(type => String, { nullable: false, description: "The link to the image of the faction." })
	@prop({ required: true, type: () => String })
	image!: string

	@Field(type => Int, { nullable: false, description: "The amount of money the faction owns." })
	@prop({ required: true, type: () => Number })
	money!: number;

	@Field(type => String, { nullable: false, description: "The name of the Faction." })
	@prop({ required: true,  type: () => String })
	name!: string;


	@Field(type => Region, { nullable: false, description: "The capital of the faction." })
	@prop({ required: true, ref: () => Region })
	capital!: Ref<Region>;

	@Field(type => Player, { nullable: false, description: "The chief of the faction." })
	@prop({ required: true, ref: () => Player })
	chief!: Ref<Player>;

	@Field(type => GDA, { nullable: false, description: "The GDA the faction belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;


	@Field(type => [Alliance], { nullable: false, description: "The alliances the faction is in." })
	@prop({ required: true, ref: () => Alliance })
	alliances!: Ref<Alliance>[];

	@Field(type => [Player], { nullable: false, description: "The mercenaries the faction owns." })
	@prop({ required: true, ref: () => Player })
	mercenaries!: Ref<Player>[];

	@Field(type => [Player], { nullable: false, description: "The players in the faction." })
	@prop({ required: true, ref: () => Player })
	players!: Ref<Player>[];

	@Field(type => [Region], { nullable: false, description: "The regions the faction owns." })
	@prop({ required: true, ref: () => Region })
	regions!: Ref<Region>[];
}
