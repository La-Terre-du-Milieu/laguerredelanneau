import { prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";

import { GDA, Player, Region, Turn } from ".";

@ObjectType({ description: "A fight in the GDA." })
export class Fight {
	@Field(type => ID, { nullable: false, description: "The id of the fight." })
	@prop({ required: true })
	id!: Types.ObjectId;

	@Field(type => String, { nullable: true, description: "The link to the replay file of the fight." })
	@prop({ required: false, type: () => String })
	fileReplayLink?: string;

	@Field(type => String, { nullable: true, description: "The link to the YouTube replay off the fight." })
	@prop({ required: false, type: () => String })
	youtubeReplayLink?: string;


	@Field(type => GDA, { nullable: false, description: "The GDA the fight belongs to." })
	@prop({ required: true, ref: () => GDA })
	gda!: Ref<GDA>;

	@Field(type => Region, { nullable: false, description: "The region the fight happened in." })
	@prop({ required: true, ref: () => Region })
	region!: Ref<Region>;

	@Field(type => Turn, { nullable: false, description: "The GDA the fight happened in." })
	@prop({ required: true, ref: () => Turn })
	turn!: Ref<Turn>;


	@Field(type => [Player], { nullable: false, description: "The losing players of the fight." })
	@prop({ required: true, ref: () => Player })
	losers!: Ref<Player>[];

	@Field(type => [Player], { nullable: false, description: "The winning players of the fight." })
	@prop({ required: true, ref: () => Player })
	winners!: Ref<Player>[];
}
