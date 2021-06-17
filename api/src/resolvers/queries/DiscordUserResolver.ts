import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { DiscordUser } from "../../../../assets/entities/classes";

@Resolver(of => DiscordUser)
export class DiscordUserResolver {
	
	@Query(returns => [DiscordUser])
	async discordUsers(): Promise<DiscordUser[]> {
		return getModelForClass(DiscordUser).find().exec();
	}

}
