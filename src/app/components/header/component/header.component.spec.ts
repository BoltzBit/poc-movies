import { HeaderComponent } from "./header.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderModule} from "../header.module";

describe(HeaderComponent.name, () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderModule]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it(`Should create component`, () => {
        expect(component).toBeTruthy();
    });
});
