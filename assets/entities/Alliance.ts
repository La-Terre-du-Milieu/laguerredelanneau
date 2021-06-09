import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";
import { Types } from "mongoose";

import { AllianceType, Faction, GDA, Region, Turn } from "./index";

@ObjectType({ description: "An alliance in a GDA." })
class Alliance {
	@Field(type => ID, { nullable: false, description: "The id of the alliance." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The  name of the alliance." })
	@prop({ required: true, type: () => String })
	readonly name!: string;

	@Field(type => AllianceType, { nullable: false, description: "The type oof alliance." })
	@prop({ required: true, enum: AllianceType })
	readonly type!: AllianceType;
	
	@Field(type => Turn, { nullable: false, description: "The turn the alliance is valid from." })
	@prop({ required: true, type: () => Turn })
	readonly startTurn!: Ref<Turn>;

	@Field(type => Turn, { nullable: true, description: "The turn the alliance is valid until." })
	@prop({ required: false, type: () => Turn })
	readonly endTurn?: Ref<Turn>;

	@Field(type => GDA, { nullable: false, description: "The GDA the alliance belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;

	@Field(type => [Faction], { nullable: false, description: "The factions in the alliance." })
	@prop({ required: true, type: () => Faction })
	readonly factions!: Ref<Faction>[];

	@Field(type => [Region], { nullable: false, description: "The regions controlled by the alliance." })
	@prop({ required: true, type: () => Region})
	readonly regions!: Ref<Region>[];
}

function getAllianceModel() {
	return getModelForClass(Alliance);
}

export {
	Alliance,
	getAllianceModel,
};
