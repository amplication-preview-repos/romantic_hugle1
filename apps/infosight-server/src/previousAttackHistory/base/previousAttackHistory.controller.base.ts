/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PreviousAttackHistoryService } from "../previousAttackHistory.service";
import { PreviousAttackHistoryCreateInput } from "./PreviousAttackHistoryCreateInput";
import { PreviousAttackHistory } from "./PreviousAttackHistory";
import { PreviousAttackHistoryFindManyArgs } from "./PreviousAttackHistoryFindManyArgs";
import { PreviousAttackHistoryWhereUniqueInput } from "./PreviousAttackHistoryWhereUniqueInput";
import { PreviousAttackHistoryUpdateInput } from "./PreviousAttackHistoryUpdateInput";

export class PreviousAttackHistoryControllerBase {
  constructor(protected readonly service: PreviousAttackHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PreviousAttackHistory })
  async createPreviousAttackHistory(
    @common.Body() data: PreviousAttackHistoryCreateInput
  ): Promise<PreviousAttackHistory> {
    return await this.service.createPreviousAttackHistory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        attackType: true,
        description: true,
        date: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PreviousAttackHistory] })
  @ApiNestedQuery(PreviousAttackHistoryFindManyArgs)
  async previousAttackHistories(
    @common.Req() request: Request
  ): Promise<PreviousAttackHistory[]> {
    const args = plainToClass(PreviousAttackHistoryFindManyArgs, request.query);
    return this.service.previousAttackHistories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        attackType: true,
        description: true,
        date: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PreviousAttackHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async previousAttackHistory(
    @common.Param() params: PreviousAttackHistoryWhereUniqueInput
  ): Promise<PreviousAttackHistory | null> {
    const result = await this.service.previousAttackHistory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        attackType: true,
        description: true,
        date: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PreviousAttackHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePreviousAttackHistory(
    @common.Param() params: PreviousAttackHistoryWhereUniqueInput,
    @common.Body() data: PreviousAttackHistoryUpdateInput
  ): Promise<PreviousAttackHistory | null> {
    try {
      return await this.service.updatePreviousAttackHistory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          attackType: true,
          description: true,
          date: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PreviousAttackHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePreviousAttackHistory(
    @common.Param() params: PreviousAttackHistoryWhereUniqueInput
  ): Promise<PreviousAttackHistory | null> {
    try {
      return await this.service.deletePreviousAttackHistory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          attackType: true,
          description: true,
          date: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
