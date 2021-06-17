import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Faction } from "../../../../assets/entities/classes";

@Resolver(of => Faction)
export class FactionResolver {
	
	@Query(returns => [Faction])
	async factions(): Promise<Faction[]> {
		return getModelForClass(Faction).find().exec();
	}

}
