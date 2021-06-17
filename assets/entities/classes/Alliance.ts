import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";
import { Types } from "mongoose";

import { AllianceType } from "./../enums";
import { Faction, GDA, Region, Turn } from ".";

@ObjectType({ description: "An alliance in a GDA." })
export class Alliance {
	@Field(type => ID, { nullable: false, description: "The id of the alliance." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The  name of the alliance." })
	@prop({ required: true, type: () => String })
	name!: string;

	@Field(type => AllianceType, { nullable: false, description: "The type oof alliance." })
	@prop({ required: true, enum: AllianceType })
	type!: AllianceType;
	
	@Field(type => Turn, { nullable: false, description: "The turn the alliance is valid from." })
	@prop({ required: true, ref: () => Turn })
	startTurn!: Ref<Turn>;

	@Field(type => Turn, { nullable: true, description: "The turn the alliance is valid until." })
	@prop({ required: false, ref: () => Turn })
	endTurn?: Ref<Turn>;

	@Field(type => GDA, { nullable: false, description: "The GDA the alliance belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => [Faction], { nullable: false, description: "The factions in the alliance." })
	@prop({ required: true, ref: () => Faction })
	factions!: Ref<Faction>[];

	@Field(type => [Region], { nullable: false, description: "The regions controlled by the alliance." })
	@prop({ required: true, ref: () => Region})
	regions!: Ref<Region>[];
}
