import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VulnerabilityList } from "./vulnerability/VulnerabilityList";
import { VulnerabilityCreate } from "./vulnerability/VulnerabilityCreate";
import { VulnerabilityEdit } from "./vulnerability/VulnerabilityEdit";
import { VulnerabilityShow } from "./vulnerability/VulnerabilityShow";
import { WebsiteScanList } from "./websiteScan/WebsiteScanList";
import { WebsiteScanCreate } from "./websiteScan/WebsiteScanCreate";
import { WebsiteScanEdit } from "./websiteScan/WebsiteScanEdit";
import { WebsiteScanShow } from "./websiteScan/WebsiteScanShow";
import { OpenPortList } from "./openPort/OpenPortList";
import { OpenPortCreate } from "./openPort/OpenPortCreate";
import { OpenPortEdit } from "./openPort/OpenPortEdit";
import { OpenPortShow } from "./openPort/OpenPortShow";
import { IpAddressList } from "./ipAddress/IpAddressList";
import { IpAddressCreate } from "./ipAddress/IpAddressCreate";
import { IpAddressEdit } from "./ipAddress/IpAddressEdit";
import { IpAddressShow } from "./ipAddress/IpAddressShow";
import { WebsiteHistoryList } from "./websiteHistory/WebsiteHistoryList";
import { WebsiteHistoryCreate } from "./websiteHistory/WebsiteHistoryCreate";
import { WebsiteHistoryEdit } from "./websiteHistory/WebsiteHistoryEdit";
import { WebsiteHistoryShow } from "./websiteHistory/WebsiteHistoryShow";
import { PreviousAttackHistoryList } from "./previousAttackHistory/PreviousAttackHistoryList";
import { PreviousAttackHistoryCreate } from "./previousAttackHistory/PreviousAttackHistoryCreate";
import { PreviousAttackHistoryEdit } from "./previousAttackHistory/PreviousAttackHistoryEdit";
import { PreviousAttackHistoryShow } from "./previousAttackHistory/PreviousAttackHistoryShow";
import { FirewallInfoList } from "./firewallInfo/FirewallInfoList";
import { FirewallInfoCreate } from "./firewallInfo/FirewallInfoCreate";
import { FirewallInfoEdit } from "./firewallInfo/FirewallInfoEdit";
import { FirewallInfoShow } from "./firewallInfo/FirewallInfoShow";
import { PredictedAttackList } from "./predictedAttack/PredictedAttackList";
import { PredictedAttackCreate } from "./predictedAttack/PredictedAttackCreate";
import { PredictedAttackEdit } from "./predictedAttack/PredictedAttackEdit";
import { PredictedAttackShow } from "./predictedAttack/PredictedAttackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"INFOSIGHT"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vulnerability"
          list={VulnerabilityList}
          edit={VulnerabilityEdit}
          create={VulnerabilityCreate}
          show={VulnerabilityShow}
        />
        <Resource
          name="WebsiteScan"
          list={WebsiteScanList}
          edit={WebsiteScanEdit}
          create={WebsiteScanCreate}
          show={WebsiteScanShow}
        />
        <Resource
          name="OpenPort"
          list={OpenPortList}
          edit={OpenPortEdit}
          create={OpenPortCreate}
          show={OpenPortShow}
        />
        <Resource
          name="IpAddress"
          list={IpAddressList}
          edit={IpAddressEdit}
          create={IpAddressCreate}
          show={IpAddressShow}
        />
        <Resource
          name="WebsiteHistory"
          list={WebsiteHistoryList}
          edit={WebsiteHistoryEdit}
          create={WebsiteHistoryCreate}
          show={WebsiteHistoryShow}
        />
        <Resource
          name="PreviousAttackHistory"
          list={PreviousAttackHistoryList}
          edit={PreviousAttackHistoryEdit}
          create={PreviousAttackHistoryCreate}
          show={PreviousAttackHistoryShow}
        />
        <Resource
          name="FirewallInfo"
          list={FirewallInfoList}
          edit={FirewallInfoEdit}
          create={FirewallInfoCreate}
          show={FirewallInfoShow}
        />
        <Resource
          name="PredictedAttack"
          list={PredictedAttackList}
          edit={PredictedAttackEdit}
          create={PredictedAttackCreate}
          show={PredictedAttackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
