import * as graphql from "@nestjs/graphql";
import { OpenPortResolverBase } from "./base/openPort.resolver.base";
import { OpenPort } from "./base/OpenPort";
import { OpenPortService } from "./openPort.service";

@graphql.Resolver(() => OpenPort)
export class OpenPortResolver extends OpenPortResolverBase {
  constructor(protected readonly service: OpenPortService) {
    super(service);
  }
}
