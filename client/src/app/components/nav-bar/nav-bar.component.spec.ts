import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarComponent, MainNavComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
