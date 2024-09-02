import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/crypto',children:[ {
  path: 'buy-sell',
  loadComponent: () =>
    import('./buy-sell/buy-sell.component').then((m) => m.BuySellComponent),
    title: 'YNEX - Buy Sell'
},
{
  path: 'currency-exchange',
  loadComponent: () =>
    import('./currency-exchange/currency-exchange.component').then(
      (m) => m.CurrencyExchangeComponent
    ),
    title: 'YNEX - Currency Exchange'
},
{
  path: 'marketcap',
  loadComponent: () =>
    import('./market-cap/market-cap.component').then(
      (m) => m.MarketCapComponent
    ),
    title: 'YNEX - Marketcap'
},
{
  path: 'transactions',
  loadComponent: () =>
    import('./transactions/transactions.component').then((m) => m.TransactionsComponent),
    title: 'YNEX - Transactions'
},
{
    path: 'wallet',
    loadComponent: () =>
      import('./wallet/wallet.component').then((m) => m.WalletComponent),
      title: 'YNEX - Wallet'
  },

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class cryptoRoutingModule {
  static routes = admin;
}