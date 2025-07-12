import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTxtEditorComponent } from './rich-txt-editor.component';

describe('RichTxtEditorComponent', () => {
  let component: RichTxtEditorComponent;
  let fixture: ComponentFixture<RichTxtEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RichTxtEditorComponent]
    });
    fixture = TestBed.createComponent(RichTxtEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
