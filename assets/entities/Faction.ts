import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, Int, ObjectType } from "type-graphql";
import { Alliance } from "./Alliance";
import { GDA } from "./GDA";
import { Player } from "./Player";
import { Region } from "./Region";

@ObjectType({ description: "A faction in the GDA." })
export class Faction {
	@Field(type => ID, { nullable: false, description: "The id of the faction." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The color of the faction." })
	@prop({ required: true, type: () => String })
	readonly color!: string;

	@Field(type => Int, { nullable: true, description: "The timestamp the faction died at." })
	@prop({ required: false, type: () => Number })
	readonly death?: number;

	@Field(type => String, { nullable: false, description: "The link to the image of the faction." })
	@prop({ required: true, type: () => String })
	readonly image!: string

	@Field(type => Int, { nullable: false, description: "The amount of money the faction owns." })
	@prop({ required: true, type: () => Number })
	readonly money!: number;

	@Field(type => String, { nullable: false, description: "The name of the Faction." })
	@prop({ required: true,  type: () => String })
	readonly name!: string;


	@Field(type => Region, { nullable: false, description: "The capital of the faction." })
	@prop({ required: true, type: () => Region })
	readonly capital!: Ref<Region>;

	@Field(type => Player, { nullable: false, description: "The chief of the faction." })
	@prop({ required: true, type: () => Player })
	readonly chief!: Ref<Player>;

	@Field(type => GDA, { nullable: false, description: "The GDA the faction belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;


	@Field(type => [Alliance], { nullable: false, description: "The alliances the faction is in." })
	@prop({ required: true, type: () => Alliance })
	readonly alliances!: Ref<Alliance>[];

	@Field(type => [Player], { nullable: false, description: "The mercenaries the faction owns." })
	@prop({ required: true, type: () => Player })
	readonly mercenaries!: Ref<Player>[];

	@Field(type => [Player], { nullable: false, description: "The players in the faction." })
	@prop({ required: true, type: () => Player })
	readonly players!: Ref<Player>[];

	@Field(type => [Region], { nullable: false, description: "The regions the faction owns." })
	@prop({ required: true, type: () => Region })
	readonly regions!: Ref<Region>[];
}

export const FactionModel = getModelForClass(Faction);
