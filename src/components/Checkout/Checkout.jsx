import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, totalQuantity, getTotal, clearCart } = useCart()
    const total = getTotal()

    const createOrder = async ({ name, phone, email, repeatemail }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: { name, phone, email, repeatemail },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            console.log("Orden creada:", objOrder) // Mensaje de depuración

            const ids = cart.map(prod => prod.id)

            const productRef = collection(db, "products")

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids))
            )
            const { docs } = productsAddedFromFirestore

            const outOfStock = []
            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que están fuera de stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 class="h4 text-center m-5">Se está generando la orden...</h1>
    }

    if (orderId) {
        return <h1 class="h4 text-center m-5">La orden fue creada correctamente. El id de su orden es {orderId}</h1>
    }

    return (
        <div>
            <h1 className="text-center pt-5">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout


