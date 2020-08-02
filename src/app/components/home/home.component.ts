import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
	selector: 'plux-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public streaming_type = null;
	public streaming_url = null;

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.api.get('radios', {'slug': 'plux'}).subscribe((res: any) => {
			this.streaming_type = 'audio';
			this.streaming_url = res.stream_std;
		});
	}

	ngAfterViewInit() {
		(<any>window).twttr = (function (d, s, id) {
			let js: any, fjs = d.getElementsByTagName(s)[0],
					t = (<any>window).twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function (f: any) {
					t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));

		if ((<any>window).twttr.ready())
			(<any>window).twttr.widgets.load();



		(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0&appId=900817413386396";
		fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}


}
