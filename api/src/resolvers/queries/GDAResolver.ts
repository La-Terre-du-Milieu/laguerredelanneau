import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { GDA } from "../../../../assets/entities/classes";

@Resolver(of => GDA)
export class GDAResolver {
	
	@Query(returns => [GDA])
	async gdas(): Promise<GDA[]> {
		return getModelForClass(GDA).find().exec();
	}

}
