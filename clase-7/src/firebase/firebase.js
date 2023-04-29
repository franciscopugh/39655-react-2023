
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "react-2023-797d2.firebaseapp.com",
    projectId: "react-2023-797d2",
    storageBucket: "react-2023-797d2.appspot.com",
    messagingSenderId: "918418942610",
    appId: "1:918418942610:web:6a53f5d5996f9a9b11544b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar BDD
const bdd = getFirestore()

/*
    CREATE --> post
    READ --> get
    UPDATE --> put
    DELETE --> delete
*/

//CRUD PRODUCTOS

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), { //Si existe la coleccion te agrega nuevos productos a la misma, si no te crea la coleccion y te envia estos productos
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}
