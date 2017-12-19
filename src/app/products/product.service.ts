import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    private _url: string = '../../api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
	return this._http.get<IProduct[]>(this._url)
	    .do(products => console.log(`All: ${JSON.stringify(products)}`))
	    .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
    	console.log(err);
	return Observable.throw(err.message);
    }
}
