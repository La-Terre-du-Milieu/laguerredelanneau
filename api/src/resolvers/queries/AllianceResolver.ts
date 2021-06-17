import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import { Query, Resolver } from "type-graphql";
import { Alliance } from "../../../../assets/entities/classes";

@Resolver(of => Alliance)
export class AllianceResolver {

	private allianceModel: ReturnModelType<typeof Alliance, BeAnObject>;

	public constructor() {
		this.allianceModel = getModelForClass(Alliance);
	}
	
	@Query(returns => [Alliance])
	async alliances(): Promise<Alliance[]> {
		return this.allianceModel.find().exec();
	}

}
