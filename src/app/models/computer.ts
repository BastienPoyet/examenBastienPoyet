export class Computer {
    id:number;
    modele:string;
    marque: string;
    type: string;
    category: string;
    prixAchat: number;
    prixVente:number;
    dateEntreeStock:Date;
    constructor(pId=null,pModele=null,pMarque=null,pType=null,pCategory=null,pPrixAchat=null,pPrixVente=null,pDateEntreeStock=null){
        this.id=pId;
        this.modele=pModele;
        this.marque=pMarque;
        this.type=pType;
        this.category=pCategory;
        this.prixAchat=pPrixAchat;
        this.prixVente=pPrixVente;
        this.dateEntreeStock=pDateEntreeStock;
    }
}
