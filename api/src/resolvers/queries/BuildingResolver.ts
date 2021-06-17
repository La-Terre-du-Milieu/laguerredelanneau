import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Building } from "../../../../assets/entities/classes";

@Resolver(of => Building)
export class BuildingResolver {
	
	@Query(returns => [Building])
	async buildings(): Promise<Building[]> {
		return getModelForClass(Building).find().exec();
	}

}
