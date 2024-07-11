import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("WebsiteScanDtoObject")
class WebsiteScanDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    url!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    scanDate?: Date;
}

export { WebsiteScanDto as WebsiteScanDto };