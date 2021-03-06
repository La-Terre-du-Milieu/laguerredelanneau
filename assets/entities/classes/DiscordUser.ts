import { prop, Ref } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { Types } from "mongoose";

import { Player } from ".";

@ObjectType({ description: "The Discord user." })
export class DiscordUser {
	@Field(type => ID, { nullable: false, description: "The id of the Discord user." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: false, description: "The link to the image of the Discord user." })
	@prop({ required: true, type: () => String })
	image!: string;

	@Field(type => [Player], { nullable: false, description: "The players this user already played." })
	@prop({ required: true, ref: () => Player })
	players!: Ref<Player>[];
}
