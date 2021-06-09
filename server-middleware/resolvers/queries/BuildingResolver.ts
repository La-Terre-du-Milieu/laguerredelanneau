import { Query, Resolver } from "type-graphql";
import { Building, getBuildingModel } from "../../../assets/entities/Building";

@Resolver(Building)
export class BuildingResolver {
	
	@Query(returns => [Building])
	async buildings() {
		return getBuildingModel().find().exec();
	}

}
