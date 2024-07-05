import { Observable } from "rxjs";
import { ContactoModel } from "../models/contacto.model";
 
export abstract class ContactoServiceInterface {
    abstract getContactos() : Observable<ContactoModel[]> ;
    abstract agregar(nuevo : ContactoModel): Observable<any>;
    abstract eliminar(id:number) : Observable<any>;
}