import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

import { HandicapLevel, MercenaryLevel } from "./../enums";
import { Faction, GDA, Region } from ".";

@ObjectType({ description: "A player in the GDA." })
export class Player {
	@Field(type => ID, { nullable: false, description: "The id of the player." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => Boolean, { nullable: false, description: "If the player is dead or not." })
	@prop({ required: true, type: () => Boolean })
	dead!: boolean;

	@Field(type => Boolean, { nullable: false, description: "If the player carries a flag." })
	@prop({ required: true, type: () => Boolean })
	flag!: boolean;

	@Field(type => HandicapLevel, { nullable: false, description: "The handicap level of the player." })
	@prop({ required: true, enum: HandicapLevel })
	handicapLevel!: HandicapLevel;

	@Field(type => MercenaryLevel, { nullable: false, description: "The mercenary level of the player." })
	@prop({ required: true, enum: MercenaryLevel })
	mercenaryLevel!: MercenaryLevel;

	@Field(type => String, { nullable: false, description: "The name of the player." })
	@prop({ required: true, type: () => String })
	name!: string;

	@Field(type => Boolean, { nullable: false, description: "If the player is a prisoner or not." })
	@prop({ required: true, type: () => Boolean })
	prisoner!: boolean;


	@Field(type => Faction, { nullable: true, description: "The faction the player belongs to." })
	@prop({ required: false, ref: () => Faction })
	faction?: Ref<Faction>;

	@Field(type => GDA, { nullable: false, description: "The GDA the player belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: true, description: "The faction the player is a mercenary for." })
	@prop({ required: false, ref: () => Faction })
	mercenary?: Ref<Faction>;

	@Field(type => Region, { nullable: true, description: "The region the player is in." })
	@prop({ required: false, ref: () => Region })
	region?: Ref<Region>;
}
