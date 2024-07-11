import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class WebsiteHistoryDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    change!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    changeDate?: Date;
}

export { WebsiteHistoryDto as WebsiteHistoryDto };