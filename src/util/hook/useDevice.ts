import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { useSelector } from 'Util';
import { actions as deviceActions } from 'Store/device';
import store from 'Store';

const WINDOW_SIZE_UPDATE_DELAY_MS = 100;

fromEvent(window, 'resize')
    .pipe(
        debounceTime(WINDOW_SIZE_UPDATE_DELAY_MS),
    )
    .subscribe(() => {
        store.dispatch(deviceActions.update());
    });

export const useDevice = () => {
    const device = useSelector(state => state.device);
    return device;
};

export default useDevice;