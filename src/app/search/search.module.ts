/**
 * Created by daved_000 on 2/26/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/alert';
import { UiSwitchModule } from 'angular2-ui-switch/src';

import { SearchComponent } from './search.component';
import { SongDetailComponent } from './song-detail.component';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
    declarations: [
        SearchComponent,
        SongDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AlertModule.forRoot(),
        UiSwitchModule,
        SearchRoutingModule
    ]
})

export class SearchModule { }