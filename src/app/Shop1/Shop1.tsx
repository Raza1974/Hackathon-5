import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import Image from "next/image";
const products = [
  { id: 1, name: "Product 1", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Product 2", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Product 3", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Product 4", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function Shop1() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Shop 1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <p className="mt-2 text-xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

