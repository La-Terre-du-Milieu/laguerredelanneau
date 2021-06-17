import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

import { EventType } from "../enums";
import { GDA, Turn } from ".";

@ObjectType({ description: "An event in the GDA." })
export class Event {
	@Field(type => ID, { nullable: false, description: "The id of the event." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => EventType, { nullable: false, description: "The type of event." })
	@prop({ required: true, enum: EventType })
	type!: EventType;


	@Field(type => GDA, { nullable: false, description: "The GDA the event belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => Turn, { nullable: false, description: "The turn the events happened in." })
	@prop({ required: true, ref: () => Turn })
	turn!: Ref<Turn>;
}
