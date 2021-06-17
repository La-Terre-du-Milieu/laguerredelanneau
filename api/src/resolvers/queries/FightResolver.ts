import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Fight } from "../../../../assets/entities/classes";

@Resolver(of => Fight)
export class FightResolver {
	
	@Query(returns => [Fight])
	async fights(): Promise<Fight[]> {
		return getModelForClass(Fight).find().exec();
	}

}
