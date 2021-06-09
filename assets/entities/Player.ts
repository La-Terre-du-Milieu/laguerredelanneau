import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";
import { Faction } from "./Faction";
import { GDA } from "./GDA";
import { HandicapLevel } from "./HandicapLevel";
import { MercenaryLevel } from "./MercenaryLevel";
import { Region } from "./Region";

@ObjectType({ description: "A player in the GDA." })
export class Player {
	@Field(type => ID, { nullable: false, description: "The id of the player." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => Boolean, { nullable: false, description: "If the player is dead or not." })
	@prop({ required: true, type: () => Boolean })
	readonly dead!: boolean;

	@Field(type => Boolean, { nullable: false, description: "If the player carries a flag." })
	@prop({ required: true, type: () => Boolean })
	readonly flag!: boolean;

	@Field(type => HandicapLevel, { nullable: false, description: "The handicap level of the player." })
	@prop({ required: true, enum: HandicapLevel })
	readonly handicapLevel!: HandicapLevel;

	@Field(type => MercenaryLevel, { nullable: false, description: "The mercenary level of the player." })
	@prop({ required: true, enum: MercenaryLevel })
	readonly mercenaryLevel!: MercenaryLevel;

	@Field(type => String, { nullable: false, description: "The name of the player." })
	@prop({ required: true, type: () => String })
	readonly name!: string;

	@Field(type => Boolean, { nullable: false, description: "If the player is a prisoner or not." })
	@prop({ required: true, type: () => Boolean })
	readonly prisoner!: boolean;


	@Field(type => Faction, { nullable: true, description: "The faction the player belongs to." })
	@prop({ required: false, type: () => Faction })
	readonly faction?: Ref<Faction>;

	@Field(type => GDA, { nullable: false, description: "The GDA the player belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: true, description: "The faction the player is a mercenary for." })
	@prop({ required: false, type: () => Faction })
	readonly mercenary?: Ref<Faction>;

	@Field(type => Region, { nullable: true, description: "The region the player is in." })
	@prop({ required: false, type: () => Region })
	readonly region?: Ref<Region>;
}

export const PlayerModel = getModelForClass(Player);
