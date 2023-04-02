import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'header.component.html',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit{
    constructor(private _router: Router){ }

    public ngOnInit(): void{
    }

    public goToHome(): void{
        this._router.navigate(['home']).then();
    }
}
