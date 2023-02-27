import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'header.component.html',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit{
    constructor(private router: Router){ }

    public ngOnInit(): void{
    }

    public goToHome(): void{
        this.router.navigate(['home']).then();
    }
}
