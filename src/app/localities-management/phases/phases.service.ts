import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PhasesService {

    constructor(private _http: Http) {
    }

    addPhase(phase: any): Observable<any> {
        return this._http.post('http://localhost:8080/phases', phase).map(res => res.json());
    }

    getPhases(): Observable<any> {
        return this._http.get('http://localhost:8080/phases').map(res => res.json());
    }
}