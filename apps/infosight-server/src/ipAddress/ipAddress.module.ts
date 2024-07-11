import { Module } from "@nestjs/common";
import { IpAddressModuleBase } from "./base/ipAddress.module.base";
import { IpAddressService } from "./ipAddress.service";
import { IpAddressController } from "./ipAddress.controller";
import { IpAddressResolver } from "./ipAddress.resolver";

@Module({
  imports: [IpAddressModuleBase],
  controllers: [IpAddressController],
  providers: [IpAddressService, IpAddressResolver],
  exports: [IpAddressService],
})
export class IpAddressModule {}
