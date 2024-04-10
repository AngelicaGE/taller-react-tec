import {
    DEVICES_ADD,
    DEVICES_DEL
} from '../../Actions/Devices/index.js';

const initState = {
    list: []
};

const devicesReducer = (state = initState, action) => {
    switch (action.type) {
        case DEVICES_ADD:
            console.log("DEVICES_ADD", action.device, action.deviceId)
            return {
                ...state,
                list: [...state.list, {...action.device, id: action.deviceId}]
            }
        case DEVICES_DEL:
            console.log("DEVICES_DEL",  action.deviceId)
            return {
                ...state,
                list: state.list.filter(device => device.id !== action.deviceId)
            }
        default:
            return state;
    }
}

export default devicesReducer;