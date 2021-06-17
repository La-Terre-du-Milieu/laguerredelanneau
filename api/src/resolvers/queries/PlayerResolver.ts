import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Player } from "../../../../assets/entities/classes";

@Resolver(of => Player)
export class PlayerResolver {
	
	@Query(returns => [Player])
	async players(): Promise<Player[]> {
		return getModelForClass(Player).find().exec();
	}

}
