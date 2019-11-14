import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocailPostsComponent } from './socail-posts.component';

describe('SocailPostsComponent', () => {
  let component: SocailPostsComponent;
  let fixture: ComponentFixture<SocailPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocailPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocailPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
