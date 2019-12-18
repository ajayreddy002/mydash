import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuServiceService {

    constructor() { }

    getMenuList() {
        const menuList: MenuItem[] = [
            {
                group: { code: 'dashboard', name: 'Dashboard' },
                menus: []
            },
            {
                group: { code: 'collect', name: 'Collect' },
                menus: [
                    { code: 'receive', name: 'Receivables' },
                    { code: 'invoices', name: 'Invoices' },
                    { code: 'quick-collects', name: 'Quick Collect' },
                    { code: 'bulk-collects', name: 'Bulk Collect' },
                ]
            },
            {
                group: { code: 'pay', name: 'Pay' },
                menus: [
                    { code: 'send', name: 'Payables' },
                    { code: 'send-bills', name: 'Bills' },
                    { code: 'payments', name: 'Fund Transfer' },
                    { code: 'bulk-transfer', name: 'Bulk Transfer' }
                ]
            },
            {
                group: { code: 'banking', name: 'Banking' },
                menus: [
                    { code: 'statements', name: 'Statements' },
                    { code: 'bank-accounts', name: 'All Bank Accounts' },
                    { code: 'bank-accounts', name: 'Link Other Accounts' }
                ]
            },
            {
                group: { code: 'accounting', name: 'Accounting' },
                menus: [
                    { code: 'transactions', name: 'Transactions' },
                    { code: 'reports', name: 'Reports' },
                    { code: 'chart-of-accounts', name: 'Chart Of Accounts' },
                    { code: 'chart-of-accounts', name: 'Migrate to open' },
                ]
            },
            {
                group: { code: 'contact', name: 'Contact' },
                menus: []
            },
        ];
        return menuList;
    }

    getSubMenuName(menuCode: string) {
        const menuList = this.getMenuList();
        for (const group of menuList) {
            for (const menu of group.menus) {
                return ` > ${menu.name}`;
            }
        }
        return '';
    }
}

export interface MenuItem {
    group: Menu;
    menus: Menu[];
}

export interface Menu {
    code: string;
    name: string;
}
