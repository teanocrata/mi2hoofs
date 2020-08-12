import React, { ReactElement } from "react";

import { observer } from "mobx-react";
import { observable, ObservableMap, runInAction } from "mobx";

import { Button, Icon } from "@blueprintjs/core";

import DeviceCard from "./DeviceCard";
import { MiBluetoothDevice } from "./MiBluetoothDevice";
import css from "./Configuration.module.css";

@observer
export default class Configuration extends React.Component {
  @observable devices: ObservableMap<
    string,
    MiBluetoothDevice
  > = new ObservableMap();

  addDevice = () => {
    navigator.bluetooth
      .requestDevice({ acceptAllDevices: true })
      .then((device) =>
        runInAction(() => {
          const currentDevice = this.devices.get(device.id);
          if (currentDevice) {
            currentDevice.updateDevice(device);
          } else {
            this.devices.set(device.id, new MiBluetoothDevice(device));
          }
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const devices: Array<ReactElement> = [];
    this.devices.forEach((device) => {
      //console.log(device.name, " connected ", device.gatt?.connected);

      devices.push(<DeviceCard key={device.id} device={device} />);
    });

    return (
      <div className={css.configuration}>
        <div className={css.devices}>{devices}</div>
        <Button className={css.addButton} fill minimal onClick={this.addDevice}>
          <Icon icon="add" iconSize={100} intent="primary" />
        </Button>
      </div>
    );
  }
}
