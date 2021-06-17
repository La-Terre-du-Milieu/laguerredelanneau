import { prop, Ref } from "@typegoose/typegoose";
import { Field, ObjectType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

import { BuildingType } from "./../enums";
import { Faction, GDA, Region } from ".";

@ObjectType({ description: "A building in a GDA." })
export class Building {
	@Field(type => ID, { nullable: false, description: "The id of the building." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => Int, { nullable: false, description: "The level of the building." })
	@prop({ required: true, type: () => Number })
	level!: number;

	@Field(type => BuildingType, { nullable: false, description: "The type of the building." })
	@prop({ required: true, enum: BuildingType })
	type!: BuildingType;


	@Field(type => GDA, { nullable: false, description: "The GDA the building belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: false, description: "The faction the building belongs to." })
	@prop({ required: true, ref: () => Faction })
	owner!: Ref<Faction>;

	@Field(type => Region, { nullable: false, description: "The region the building is in." })
	@prop({ required: true, ref: () => Region })
	region!: Ref<Region>;
}
