import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";
import { Building } from "./Building";
import { Faction } from "./Faction";
import { FightType } from "./FightType";
import { GDA } from "./GDA";
import { Player } from "./Player";
import { RegionType } from "./RegionType";

@ObjectType({ description: "A region in a GDA." })
export class Region {
	@Field(type => ID, { nullable: false, description: "The id of the region." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The description of the region." })
	@prop({ required: true, type: () => String })
	readonly description!: string;

	@Field(type => FightType, { nullable: false, description: "The type of fights in the region." })
	@prop({ required: true, enum: FightType })
	readonly fightType!: FightType;

	@Field(type => String, { nullable: false, description: "The link to the image of the region." })
	@prop({ required: true, type: () => String })
	readonly image!: string;

	@Field(type => String, { nullable: true, description: "The link to the game file of the region." })
	@prop({ required: false, type: () => String })
	readonly mapFileLink?: string;

	@Field(type => String, { nullable: false, description: "The name of the region." })
	@prop({ required: true, type: () => String })
	readonly name!: string;

	@Field(type => RegionType, { nullable: false, description: "The type of the region." })
	@prop({ required: true, enum: RegionType })
	readonly type!: RegionType;


	@Field(type => GDA, { nullable: false, description: "The GDA the region belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;

	@Field(type => Faction, { nullable: true, description: "The faction owning the region." })
	@prop({ required: false, type: () => Faction })
	readonly owner?: Ref<Faction>;


	@Field(type => [Region], { nullable: false, description: "The regions adjacent to this region." })
	@prop({ required: true, type: () => Region })
	readonly adjacent!: Ref<Region>[];

	@Field(type => [Building], { nullable: false, description: "The buildings in the region." })
	@prop({ required: true, type: () => Building })
	readonly buildings!: Ref<Building>[];

	@Field(type => [Player], { nullable: false, description: "The players in the region." })
	@prop({ required: true, type: () => Player })
	readonly players!: Ref<Player>[];
}

export const RegionModel = getModelForClass(Region);
