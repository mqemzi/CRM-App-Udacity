import { delay, put, takeLatest } from '@redux-saga/core/effects';
import * as actions from '../reducers';
export function* watchLoadRegions() {
    yield takeLatest(actions.loadRegions.toString(), takeLoadRegions);
}

export function* takeLoadRegions() {
    try {

        // Fake getting region list to use from an API.
        yield delay(500);

        const result = [
          'London',
          'North East',
          'North West',
          'Yorkshire',
          'East Midlands',
            'West Midlands',
            'South East',
            'East of England',
            'South West',
            'Scotland',
            'Northern Ireland',
            'Wales'
        ];
        result.sort((a,b)=>a.localeCompare(b));
        yield put(actions.setRegions(result));
    } catch( error)  {

    }
}
