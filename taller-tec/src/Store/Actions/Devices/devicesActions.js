import { DEVICES_ADD, DEVICES_DEL } from ".";

export const addDevice = (device, deviceId) => {
    return {
        type: DEVICES_ADD,
        device,
        deviceId
    }
}

export const delDevice = (deviceId) => {
    return {
        type: DEVICES_DEL,
        deviceId
    }
}
