import { getModelForClass } from "@typegoose/typegoose";
import { Query, Resolver } from "type-graphql";
import { Event } from "../../../../assets/entities/classes";

@Resolver(of => Event)
export class EventResolver {
	
	@Query(returns => [Event])
	async events(): Promise<Event[]> {
		return getModelForClass(Event).find().exec();
	}

}
