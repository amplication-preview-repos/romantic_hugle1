import { Module } from "@nestjs/common";
import { VulnerabilityModule } from "./vulnerability/vulnerability.module";
import { WebsiteScanModule } from "./websiteScan/websiteScan.module";
import { OpenPortModule } from "./openPort/openPort.module";
import { IpAddressModule } from "./ipAddress/ipAddress.module";
import { WebsiteHistoryModule } from "./websiteHistory/websiteHistory.module";
import { PreviousAttackHistoryModule } from "./previousAttackHistory/previousAttackHistory.module";
import { FirewallInfoModule } from "./firewallInfo/firewallInfo.module";
import { PredictedAttackModule } from "./predictedAttack/predictedAttack.module";
import { SecurityModule } from "./Security/security.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    VulnerabilityModule,
    WebsiteScanModule,
    OpenPortModule,
    IpAddressModule,
    WebsiteHistoryModule,
    PreviousAttackHistoryModule,
    FirewallInfoModule,
    PredictedAttackModule,
    SecurityModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
