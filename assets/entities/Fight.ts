import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { Field, ID, ObjectType } from "type-graphql";
import { GDA } from "./GDA";
import { Player } from "./Player";
import { Region } from "./Region";
import { Turn } from "./Turn";

@ObjectType({ description: "A fight in the GDA." })
export class Fight {
	@Field(type => ID, { nullable: false, description: "The id of the fight." })
	@prop({ required: true })
	readonly id!: Types.ObjectId;

	@Field(type => String, { nullable: true, description: "The link to the replay file of the fight." })
	@prop({ required: false, type: () => String })
	readonly fileReplayLink?: string;

	@Field(type => String, { nullable: true, description: "The link to the YouTube replay off the fight." })
	@prop({ required: false, type: () => String })
	readonly youtubeReplayLink?: string;


	@Field(type => GDA, { nullable: false, description: "The GDA the fight belongs to." })
	@prop({ required: true, type: () => GDA })
	readonly gda!: Ref<GDA>;

	@Field(type => Region, { nullable: false, description: "The region the fight happened in." })
	@prop({ required: true, type: () => Region })
	readonly region!: Ref<Region>;

	@Field(type => Turn, { nullable: false, description: "The GDA the fight happened in." })
	@prop({ required: true, type: () => Turn })
	readonly turn!: Ref<Turn>;


	@Field(type => [Player], { nullable: false, description: "The losing players of the fight." })
	@prop({ required: true, type: () => Player })
	readonly losers!: Ref<Player>[];

	@Field(type => [Player], { nullable: false, description: "The winning players of the fight." })
	@prop({ required: true, type: () => Player })
	readonly winners!: Ref<Player>[];
}

export const FightModel = getModelForClass(Fight);
