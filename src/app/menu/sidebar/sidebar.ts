import { Component } from '@angular/core';
import { ItemSidebarMenu,itensMenu} from '../item.sidebar.menu';

@Component({
	selector: 'sidebar-cmp',
	templateUrl: './sidebar.html'
})

export class SidebarComponent {
	isActive = false;
	showMenu: string = '';
	xitensMenu = itensMenu;
	eventCalled() {
		this.isActive = !this.isActive;
	}
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
