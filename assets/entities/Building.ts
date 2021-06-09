import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Field, ObjectType, ID, Int } from "type-graphql";
import { Types } from "mongoose";

import { BuildingType,Faction, GDA, Region } from "./index";

@ObjectType({ description: "A building in a GDA." })
export class Building {
	@Field(type => ID, { nullable: false, description: "The id of the building." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => Int, { nullable: false, description: "The level of the building." })
	@prop({ required: true, type: () => Number })
	readonly level!: number;

	@Field(type => BuildingType, { nullable: false, description: "The type of the building." })
	@prop({ required: true, enum: BuildingType })
	readonly type!: BuildingType;


	@Field(type => GDA, { nullable: false, description: "The GDA the building belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: false, description: "The faction the building belongs to." })
	@prop({ required: true, type: () => Faction })
	readonly owner!: Ref<Faction>;

	@Field(type => Region, { nullable: false, description: "The region the building is in." })
	@prop({ required: true, type: () => Region })
	readonly region!: Ref<Region>;
}

export function getBuildingModel() {
	return getModelForClass(Building);
}
