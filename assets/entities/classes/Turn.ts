import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, Int, ObjectType } from "type-graphql";

import { GDA } from "./GDA";

@ObjectType({ description: "A turn in the GDA." })
export class Turn {
	@Field(type => ID, { nullable: false, description: "The id of the turn." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => Int, { nullable: false, description: "The order of the turn." })
	@prop({ required: true, type: () => Number })
	order!: number;


	@Field(type => GDA, { nullable: false, description: "The GDA the turn belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;
}
