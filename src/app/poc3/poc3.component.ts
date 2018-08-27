import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api'

@Component({
  selector: 'app-poc3',
  templateUrl: './poc3.component.html',
  styleUrls: ['./poc3.component.css']
})
export class Poc3Component implements OnInit {

  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
            {
                label: 'Home',
                icon: 'fas fa-home',
                items: [{
                        label: 'New', 
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Home and Kitchen',
                icon: 'fa fa-fw fa-edit',
                items: [
                    {label: 'Furniture', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Cookware', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'Interior Design',
                icon: 'far fa-object-ungroup',
                items: [
                    {
                        label: 'Furniture',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Matress and Flowers',
                        icon: 'far fa-flushed',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Car and Bike Accessories',
                icon: 'fas fa-motorcycle',
                items: [
                    {
                        label: 'Bike',
                        icon: 'fas fa-car',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Matress and Flowers',
                        icon: 'fas fa-certificate',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Televisions',
                icon: 'fas fa-tv',
                items: [
                    {
                        label: 'Samsung',
                        icon: 'fas fa-tv',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'LG',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Payments',
                icon: 'fab fa-cc-amazon-pay',
                items: [
                    {
                        label: 'Amazon',
                        icon: 'fab fa-amazon-pay',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Apple',
                        icon: 'fab fa-apple-pay',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Networks',
                icon: 'fas fa-broadcast-tower',
                items: [
                    {
                        label: 'JIO',
                        icon: 'fas fa-tv'
                    },
                    {
                        label: 'Airtel',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            },
            {
                label: 'Help',
                icon: 'fa fa-fw fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa fa-fw fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                    ]}
                ]
            },
        ];
  }

}
