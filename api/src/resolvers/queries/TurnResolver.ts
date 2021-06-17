import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Turn } from "../../../../assets/entities/classes";

@Resolver(of => Turn)
export class TurnResolver {
	
	@Query(returns => [Turn])
	async turns(): Promise<Turn[]> {
		return getModelForClass(Turn).find().exec();
	}

}
