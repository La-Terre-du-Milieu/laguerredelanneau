import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Region } from "../../../../assets/entities/classes";

@Resolver(of => Region)
export class RegionResolver {
	
	@Query(returns => Region)
	async regions(): Promise<Region[]> {
		return getModelForClass(Region).find().exec();
	}

}
