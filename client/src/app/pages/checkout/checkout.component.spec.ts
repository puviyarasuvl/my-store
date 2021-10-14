import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
    let component: CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterModule.forRoot([]),
            ],
            declarations: [CheckoutComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
