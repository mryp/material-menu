import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ツールバータイトル';
  menuIcon = "menu";
  @ViewChild('sidenav') sidenav: MdSidenav; //#sidenav オブジェクトを読み込むため設定

  naviLinkList = [
    {
      title: 'ページ1',
      link: "/page1",
    },
    {
      title: 'ページ2',
      link: "/page2",
    },
  ];

  jumpPage(title:string, link:string) {
    this.sidenav.close();
    this.title = title;
    console.log("ページジャンプ！ " +link);
//    this.router.navigate([link]);
  }


  sideNaviOpenStart() {
    this.menuIcon = "arrow_back";
  }
  sideNaviCloseStart() {
    this.menuIcon = "menu";
  }
  sideNaviToggle() {
    this.sidenav.toggle();
  }

}
