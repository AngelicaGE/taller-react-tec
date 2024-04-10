import store from "../../Store/store";
import { 
    addDevice,
    delDevice
} from "../../Store/Actions/Devices/devicesActions";

export const addDeviceHnd = (device) => {
    let devicesList = store.getState().devices.list;
    let deviceId = devicesList.length === 0 ? 0 : devicesList[devicesList.length - 1].id + 1;
    store.dispatch(addDevice(device, deviceId));
}

export const delDeviceHnd = (deviceId) => {
    store.dispatch(delDevice(deviceId));
}
