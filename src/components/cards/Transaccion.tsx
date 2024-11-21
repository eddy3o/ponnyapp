// ListaTransacciones.tsx
import React, { useEffect, useState } from "react"
import Transaccion from "./Transaccion"

interface TransaccionData {
  id: number
  titulo: string
  cantidad: string
  fecha: string
  esPositiva: boolean
}

const ListaTransacciones: React.FC = () => {
  const [transacciones, setTransacciones] = useState<TransaccionData[]>([])
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    const fetchTransacciones = async () => {
      try {
        const response = await fetch("http://backend-url/api/transacciones", {
          method: "GET",
        })

        if (response.ok) {
          const data = await response.json()
          setTransacciones(data)
        } else {
          setErrorMessage("Error al cargar las transacciones.")
        }
      } catch (error) {
        console.error("Error de conexión:", error)
        setErrorMessage("No se pudo conectar con el servidor.")
      }
    }

    fetchTransacciones()
  }, [])

  return (
    <div className="p-4 bg-[#111] rounded-lg shadow-md text-[#E7E7E7]">
      <h2 className="text-2xl font-bold mb-4">Transacciones Recientes</h2>
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {transacciones.map((transaccion) => (
            <Transaccion
              key={transaccion.id}
              titulo={transaccion.titulo}
              cantidad={transaccion.cantidad}
              fecha={transaccion.fecha}
              esPositiva={transaccion.esPositiva}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaTransacciones
