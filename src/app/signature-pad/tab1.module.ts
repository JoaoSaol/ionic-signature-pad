import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { Tab1PageRoutingModule } from './signature-pad-routing.module';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
