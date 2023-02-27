import { HeaderComponent } from "./header.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderModule} from "../header.module";
import {Router, Routes} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {RouterTestingModule} from "@angular/router/testing";

describe(HeaderComponent.name, () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    let router: Router;

    const routes: Routes = [
        {path: 'home', component: AppComponent}
    ]

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HeaderModule,
                RouterTestingModule.withRoutes(routes)
            ]
        }).compileComponents();

        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it(`Should create component`, () => {
        expect(component).toBeTruthy();
    });

    it(`${HeaderComponent.prototype.goToHome.name} Should return to home when clicked`, () => {
        fixture.detectChanges();
        router.initialNavigation();

        component.goToHome();

        expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
});
