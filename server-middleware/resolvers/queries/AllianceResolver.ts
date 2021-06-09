import { Query, Resolver } from "type-graphql";
import { Alliance, getAllianceModel } from "../../../assets/entities/Alliance";

@Resolver(Alliance)
export class AllianceResolver {
	
	@Query(returns => [Alliance])
	async alliances(): Promise<Alliance[]> {
		return getAllianceModel().find().exec();
	}

}
