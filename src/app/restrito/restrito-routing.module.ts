import { NgModel } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { AtualizaProdutoComponent } from "./atualiza-produto/atualiza-produto.component";
import { RestritoComponent } from "./restrito.component";
const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroProdutoComponent},
            { path: 'lista', component: AtualizaProdutoComponent}
        ]
    }
]
