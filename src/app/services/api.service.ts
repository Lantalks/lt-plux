import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class ApiService {

	constructor(private httpClient: HttpClient) {}

	public get(endpoint, params: any = null) {
		return this.httpClient.get(environment.api_url + endpoint, {params: params});
	}
}